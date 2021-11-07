/**
* Gruntfile
* 
* Build tasks
*
*/

module.exports = function(grunt) {
    
    // Configuration
    
    var options = {
        clean: require('./build/clean'),
        cssmin: require('./build/cssmin'),
        pug: require('./build/pug'),
        sass: require('./build/sass'),
        watch: require('./build/watch'),
    }
    
    grunt.config.init(options);
    
    // Load build modules
    
    grunt.task.loadNpmTasks('grunt-contrib-clean');
    grunt.task.loadNpmTasks('grunt-contrib-cssmin');
    grunt.task.loadNpmTasks('grunt-contrib-pug');
    grunt.task.loadNpmTasks('grunt-contrib-sass');
    grunt.task.loadNpmTasks('grunt-contrib-watch');
    
    // Register tasks
    
    grunt.task.registerTask('css', 'Build CSS files', [
        'clean:css', 'sass:app', 'cssmin:app' 
    ]);
    
    grunt.task.registerTask('html', 'Build HTML files', [
        'clean:html', 'pug:app' 
    ]);
    
    grunt.task.registerTask('js', 'Build JavaScript files', [
        'clean:js' 
    ]);
    
    grunt.task.registerTask('build', 'Build CSS, HTML, and JavaScript files', [
        'css', 'html', 'js' 
    ]);
    
    grunt.task.registerTask('default', ['build']);
    
};
