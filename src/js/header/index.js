/*
|------------------------------------------------------------------------------
| App: Header
|------------------------------------------------------------------------------
|
|   Header constructor
|
*/

const View = require('../view');
const Navbar = require('./navbar');

var Header = View.extend({
    
    navbar: null,
    
    /*
    |--------------------------------------------------------------------------
    | Initialize
    |--------------------------------------------------------------------------
    */
    
    initialize: function() {
        this.navbar = new Navbar({
            element: document.getElementById('header-navbar')
        });
    },
    
    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */
    
    render: function() {
        this.navbar.render();
    }
    
});

module.exports = Header;
