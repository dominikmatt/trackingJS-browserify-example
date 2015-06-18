module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['browserify', 'watch']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'js/main.js',
                dest: 'dist/main.js'
            }
        },
        watch: {
            files: ['js/**/*', '../../../scripts/**/*.js'],
            tasks: ['default'],
            options: {
                livereload: 1338
            }
        },
        connect: {
            server: {
                options: {
                    port: 3001,
                    hostname: '*'
                }
            }
        }
    });

    grunt.registerTask('serve', ['connect:server', 'watch']);
};