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
const HeroSection = require('./sections/hero');
const AboutSection = require('./sections/about');
const SkillsSection = require('./sections/skills');
const ResumeSection = require('./sections/resume');
const ContactSection = require('./sections/contact');
const bind = require('lodash/bind');

var App = View.extend({
    
    header: null,
    
    footer: null,
    
    heroSection: null,
    
    aboutSection: null,
    
    skillsSection: null,
    
    resumeSection: null,
    
    contactSection: null,
    
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
        
        this.heroSection = new HeroSection({
            element: document.getElementById('hero')
        });
        
        this.aboutSection = new AboutSection({
            element: document.getElementById('about')
        });
        
        this.skillsSection = new SkillsSection({
            element: document.getElementById('skills')
        });
        
        this.resumeSection = new ResumeSection({
            element: document.getElementById('resume')
        });
        
        this.contactSection = new ContactSection({
            element: document.getElementById('contact')
        });
        
        this.header.navbar.nav.on('scrollto', bind(this.handleScrollTo, this));
        
    },
    
    /*
    |--------------------------------------------------------------------------
    | Handle scroll
    |--------------------------------------------------------------------------
    */
    
    handleScrollTo: function(article) {
        switch (article) {
            case 'about':
                scrollTo(0, this.aboutSection.element.getBoundingClientRect().top);
                break;
            case 'skills':
                scrollTo(0, this.skillsSection.element.getBoundingClientRect().top);
                break;
            case 'resume':
                scrollTo(0, this.resumeSection.element.getBoundingClientRect().top);
                break;
            case 'contact':
                scrollTo(0, this.contactSection.element.getBoundingClientRect().top);
                break;
        }
    },
    
    /*
    |--------------------------------------------------------------------------
    | Handle scroll
    |--------------------------------------------------------------------------
    */
    
    handleScroll: function() {
        
    },
    
    /*
    |--------------------------------------------------------------------------
    | Handle resize
    |--------------------------------------------------------------------------
    */
    
    handleResize: function() {
        
    },
    
    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */
    
    render: function() {
        this.header.render();
        this.heroSection.render();
        this.aboutSection.render();
        this.skillsSection.render();
        this.resumeSection.render();
        this.contactSection.render();
        this.footer.render();
    }
    
});

module.exports = App;
