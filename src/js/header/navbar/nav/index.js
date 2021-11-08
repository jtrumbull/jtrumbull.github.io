/*
|------------------------------------------------------------------------------
| App\Header\Navbar: Nav
|------------------------------------------------------------------------------
|
|   Nav constructor
|
*/

const View = require('../../../view');
const NavbarNavItem = require('./item');

var NavbarNav = View.extend({
    
    items: [],
    
    /*
    |--------------------------------------------------------------------------
    | Initialize
    |--------------------------------------------------------------------------
    */
    
    initialize: function() {
        this.items.push(new NavbarNavItem({
            element: this.element.querySelector('[data-href="about"]')
        }));
        this.items.push(new NavbarNavItem({
            element: this.element.querySelector('[data-href="about"]')
        }));
        this.items.push(new NavbarNavItem({
            element: this.element.querySelector('[data-href="about"]')
        }));
        this.items.push(new NavbarNavItem({
            element: this.element.querySelector('[data-href="about"]')
        }));
    },
    
    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */
    
    render: function() {
        
    }
    
});

module.exports = NavbarNav;
