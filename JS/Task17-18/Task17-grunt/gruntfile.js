module.exports = function(grunt) {
   grunt.initConfig({
      concat: {
         options: {
            separator: ';',
         },
         dist: {
            src: 'app/js/*.js',
            dest: 'dist/script.main.js',
         },
      },
      concat_css: {
         all: {
            src: 'app/styles/*.css',
            dest: 'dist/styles.main.css'
         },
      },
      uglify: {
         dist: {
            src: 'dist/script.main.js',
            dest: 'dist/script.main.min.js',
         }
      },
      cssmin: {
         target: {
            files: [{
               expand: true,
               cwd: 'dist/',
               src: 'styles.main.css',
               dest: 'dist/',
               ext: '.min.css'
            }]
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-concat-css');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');

   grunt.registerTask('default', ['concat', 'concat_css', 'uglify', 'cssmin']);

};
