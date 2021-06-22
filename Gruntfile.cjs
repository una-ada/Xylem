/**
 * @file Xylem Gruntfile
 * @author Una Ada <una@anarchy.website>
 * @version 0.4.2
 * @since 0.4.0
 *
 * About Gruntfiles: {@link https://gruntjs.com/sample-gruntfile}
 *
 * Because Grunt requires a CommonJS module and this project is set to use ES
 * modules via `"type": "module"` in package.json, Grunt must be ran using:
 *   `$ grunt --gruntfile Gruntfile.cjs`
 *
 * Ideally, I'd like a way to simply set a global or package option for this,
 * but c'est la vie. Reference: {@link https://stackoverflow.com/a/67088689}
 */

/**
 * Grunt configuration.
 * @arg grunt The Grunt package
 */
module.exports = grunt => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // https://www.npmjs.com/package/grunt-jsdoc
    jsdoc: {
      dist: {
        src: '*.js',
        dest: 'docs',
      },
    },
    // https://www.npmjs.com/package/grunt-dart-sass
    'dart-sass': {
      target: {
        files: [{
          expand: true,
          src: 'src/styles/*.scss',
          dest: 'public/styles',
          ext: '.css'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-dart-sass');
  grunt.registerTask('default', ['jsdoc', 'dart-sass']);
};