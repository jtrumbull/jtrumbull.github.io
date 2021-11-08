/**
* Build: Cssmin
* 
* Minify CSS
*
*/

module.exports = {
    
    app: {
        options: {
            sourceMap: true
        },
        files: {
            'dist/css/app.min.css': [ 'dist/css/app.css' ]
        }
    }
    
}
