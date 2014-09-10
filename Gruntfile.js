/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    "pkg": grunt.file.readJSON('package.json'),
    "banner": '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    "bower-install-simple": {
      "dev": {
        "options": {
          "color": true,
          "directory": "deps/components"
        }
      }
    },
    "less": {
      "dist": {
        "options": {
        },
        "files": {
          "dist/tmp/bootstrap-2-to-3-removed.css" : "less/bootstrap-2-to-3-removed.less",
          "dist/bootstrap-2-to-3.css": "less/bootstrap-2-to-3.less"
        }
      }
    },
    "clean": {
      "build": ["dist/tmp"]
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-install-simple');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('build', [
    'bower-install-simple:dev',
    'less:dist',
    'clean:build'
  ]);

};
