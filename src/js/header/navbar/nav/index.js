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
    
    active: null,
    
    aboutItem: null,
    
    skillsItem: null,
    
    resumeItem: null,
    
    contactItem: null,
    
    /*
    |--------------------------------------------------------------------------
    | Initialize
    |--------------------------------------------------------------------------
    */
    
    initialize: function() {
        
        var self = this;
        
        this.aboutItem = new NavbarNavItem({
            element: this.element.querySelector('[data-target="about"]')
        });
        
        this.skillsItem = new NavbarNavItem({
            element: this.element.querySelector('[data-target="skills"]')
        });
        
        this.resumeItem = new NavbarNavItem({
            element: this.element.querySelector('[data-target="resume"]')
        });
        
        this.contactItem = new NavbarNavItem({
            element: this.element.querySelector('[data-target="contact"]')
        });
        
        var handleClick = function() {
            if (self.active) {
                self.active.deactivate();
            }
            this.activate();
            self.active = this;
            self.emit('scrollto', this.element.getAttribute('data-target'));
        };
        
        this.aboutItem.on('click', handleClick);
        this.skillsItem.on('click', handleClick);
        this.resumeItem.on('click', handleClick);
        this.contactItem.on('click', handleClick);
        
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
