/*
|------------------------------------------------------------------------------
| App
|------------------------------------------------------------------------------
|
|   App constructor
|
*/

const View = require('./view');
const Header = require('./header');
const Footer = require('./footer');

var App = View.extend({
    
    header: null,
    
    footer: null,
    
    /*
    |--------------------------------------------------------------------------
    | Initialize
    |--------------------------------------------------------------------------
    */
    
    initialize: function() {
        
        this.header = new Header({
            app: this,
            element: document.getElementById('header')
        });
        
        this.footer = new Footer({
            app: this,
            element: document.getElementById('footer')
        });
        
    },
    
    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */
    
    render: function() {
        this.header.render();
        this.footer.render();
    }
    
});

module.exports = App;
