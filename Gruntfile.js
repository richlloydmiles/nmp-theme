'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/custom-styles.css' : 'css/custom-styles.scss'
				},
				options : {
					style : 'compressed'
				}
			}
		},
		uglify : {
			dist: {
				files: {
					'js/min.js' : ['js/expanded.js' , 'js/more.js']
				},
				options : {
					style : 'compressed'
				}
			}
		},
		watch: {
			css: {
				files: '**/custom-styles.scss',
				tasks: ['sass']
			}, 
			js : {
				files: ['js/expanded.js', 'js/more.js'],
				tasks:['uglify']
			},
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['watch']);
}

