 module.exports = function(grunt) {
 
  "use strict";

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
        
    banner: 
      '/*!\n' +
      ' * <%= pkg.name %> v<%= pkg.version %>\n' +
      ' * <%= pkg.url %>\n' +
      ' * Licensed under <%= pkg.licenses %>\n' +
      ' * Author : <%= pkg.author %>\n' +
      ' * <%= pkg.author_url %>\n' +
      ' */\n',
    // ====================================================
    clean: {
      files: [
        '<%= pkg.dist %>',
        '<%= pkg.docs %>/js/*.js'
      ]
    },
    // ====================================================

    // ====================================================
    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'min',
        mangle: false,
        compress:false,
      },
      source:{
        options: {
          indentLevel: 2,
          beautify: true
        },
        files :  { 
          '<%= pkg.docs %>/js/jquery.<%= pkg.name %>.js' : [
            '<%= pkg.source %>/js/<%= pkg.name %>.js'
          ]
        } 
      },
      minify:{
        files :  { 
          '<%= pkg.docs %>/js/jquery.<%= pkg.name %>.min.js' : [
            '<%= pkg.docs %>/js/jquery.<%= pkg.name %>.js' 
          ]
        } 
      }
    },
    // ====================================================
    jshint: {
      options: {
        jshintrc: '<%= pkg.source %>/js/.jshintrc',
      },
      grunt: {
        src: 'Gruntfile.js'
      },
      source: {
        src: [
          '<%= pkg.docs %>/js/jquery.<%= pkg.name %>.js',
          '<%= pkg.docs %>/js/jquery.<%= pkg.name %>.min.js'
        ]
      },
      all: {
        src:[
          '<%= pkg.source %>/js/*.js', 
          '<%= pkg.dist %>/js/*.js',
          '<%= jshint.grunt.src %>'
        ]
      }
    },

    // ====================================================
    copy: {
      dist: {
        expand: true,
        cwd: './<%= pkg.docs %>',
        src: [
          'js/jquery.<%= pkg.name %>.js',
          'js/jquery.<%= pkg.name %>.min.js'
        ],
        dest: './<%= pkg.dist %>'
      }
    },
    // ====================================================
    connect: {
      server: {
        options: {
          port: 9999,
          hostname: '0.0.0.0',
          base: '<%= pkg.public %>/',
          open: {
            server: {
              path: 'http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>'
            }
          }
        }
      }
    },
    // ====================================================
    notify: {
      options: {
        title: '<%= pkg.name %> Grunt Notify',
      },
      success:{
        options: {
          message: 'Success!',
        }
      }
    },
    // ====================================================
    watch: {
      options: {
        spawn: false,
        livereload : true
      },
      grunt: {
        files: ['<%= jshint.grunt.src %>'],
        tasks: [
          'jshint:grunt',
          'notify'
        ]
      },
      js: {
        files: [
          '<%= pkg.source %>/js/*.js'
        ],
        tasks: [
          'uglify',
          'jshint:source',
          'notify'
        ]
      }
    }
     
  });

  // ====================================================
  grunt.registerTask('build-js', [
    'uglify'
  ]);
  
  // ====================================================
  grunt.registerTask('test', [
    'jshint:all'
  ]);

  // ====================================================
  grunt.registerTask('b', [
    'clean',
    'build-js',
    'test',
    'copy'
  ]);
  
  // ====================================================
  grunt.registerTask('default', function () {
    grunt.log.warn('`grunt` to start a watch.');
    grunt.task.run([
      'connect',
      'watch'
    ]);
  });
    
};