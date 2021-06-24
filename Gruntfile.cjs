/**
 * @file Xylem Gruntfile
 * @author Una Ada <una@anarchy.website>
 * @version 0.5.2
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
  /*----- Configure Tasks ----------------------------------------------------*/
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      css: {
        files: ['src/styles/*.scss'],
        tasks: ['dart-sass'],
      },
      // js: {
      //   files: ['*.js', '**/*.js'],
      //   tasks: ['jsdoc'],
      // },
    },
    // https://www.npmjs.com/package/grunt-jsdoc
    jsdoc: {
      dist: {
        src: [
          '*.js',
          'bin/*.js',
          'config/*.js',
          'controllers/*.js',
          'models/*.js',
          'routes/*.js',
        ],
        dest: 'public/docs',
        options: {
          // https://github.com/clenemt/docdash
          template: 'node_modules/docdash',
        },
      },
    },
    // https://www.npmjs.com/package/grunt-dart-sass
    'dart-sass': {
      target: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: 'styles/*.scss',
            dest: 'public/',
            ext: '.css',
          },
        ],
      },
    },
  });

  /*------ Load Tasks --------------------------------------------------------*/
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-dart-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /*----- Register Tasks -----------------------------------------------------*/
  grunt.registerTask('default', ['dart-sass', 'watch']);
};
