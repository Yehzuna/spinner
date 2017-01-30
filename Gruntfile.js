module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dev: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css'
                }
            },
            prod: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css',
                    environment: 'production'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('dev', [
        'compass:dev'
    ]);

    grunt.registerTask('prod', [
        'compass:prod'
    ]);
};