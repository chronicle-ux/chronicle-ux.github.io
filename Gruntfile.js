module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'styles/main.css': 'styles/main.scss'
        }
      }
    },
    autoprefixer: {
      dist: {
        src: 'styles/main.css',
        dest: 'styles/main.css'
      }
    },
    watch: {
      styles: {
        files: ['styles/*.scss','styles/modules/*.scss'],
        tasks: ['sass','autoprefixer'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['scripts/*.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['index.html'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8888
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','autoprefixer']);
  grunt.registerTask('server',['connect','watch']);

};
