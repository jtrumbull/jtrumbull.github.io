/**
* Build: Watch
* 
* Run predefined tasks whenever watched file patterns are added, changed or
* deleted
*
*/

module.exports = {
    
    js: {
        files: 'src/js/**/*.js',
        tasks: [ 'js' ]
    },
    
    pug: {
        files: 'src/pug/**/*.pug',
        tasks: [ 'html' ]
    },
    
    scss: {
        files: 'src/scss/**/*.scss',
        tasks: [ 'css' ]
    }
    
}
