/*
|------------------------------------------------------------------------------
| App\Header: Navbar
|------------------------------------------------------------------------------
|
|   Navbar constructor
|
*/

const View = require('../../view');
const NavbarBrand = require('./brand');
const NavbarNav = require('./nav');
const NavbarToggler = require('./toggler');

var Navbar = View.extend({
    
    brand: null,
    
    nav: null,
    
    toggler: null,
    
    /*
    |--------------------------------------------------------------------------
    | Initialize
    |--------------------------------------------------------------------------
    */
    
    initialize: function() {
        
        this.brand = new NavbarBrand({
            element: document.getElementById('header-navbar-brand')
        });
        
        this.nav = new NavbarNav({
            element: document.getElementById('header-navbar-collapse')
        });
        
        this.toggler = new NavbarToggler({
            element: document.getElementById('header-navbar-toggler')
        });
        
    },
    
    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */
    
    render: function() {
        this.brand.render();
        this.nav.render();
        this.toggler.render();
    }
    
});

module.exports = Navbar;
