'use strict';

module.exports = function(grunt) {
	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		mochaTest: {
			options: {
				timeout: 7000,
				reporter: 'spec'
			},
			src: ['test/**/*.js']
		},
		env: {
			test: {
				NODE_ENV: 'test'
			}
		}
	});

	//Load NPM tasks
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-env');

	//Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	//Test task.
	grunt.registerTask('test', ['env:test', 'mochaTest']);
};
