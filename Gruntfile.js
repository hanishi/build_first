module.export = function (grunt) {
	grunt.initConfig({
		jshint: ['Gruntfile.js']
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint']);
}
