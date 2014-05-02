module.exports = function (grunt) {

  var shell = require('shelljs');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8080,
          base: './deploy'
        }
      }
    },
    // concat: {
    //   dist: {
    //     src: [ "src/lib/**/*.js",
    //         "src/game/**/*.js"
    //        ],
    //     dest: 'deploy/js/<%= pkg.name %>.js'
    //   }
    // },
    shell: {
      // bake impact game
      bake: {
        command: 'cd src/tools/ && ./bake.sh && cd .. && mv game.min.js ../deploy/js/game.min.js && cp -r media/sprites/ ../deploy/media/sprites && cp -r media/tiles/ ../deploy/media/tiles'
      }
    },
    watch: {
      files: 'src/**/*.js',
      tasks: ['shell:bake']
    },
    open: {
      dev: {
        path: 'http://localhost:8080/index.html'
      }
    }
  });

  grunt.registerTask('default', ['shell:bake', 'connect', 'open', 'watch']);

}
