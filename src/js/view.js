/*
|------------------------------------------------------------------------------
| View
|------------------------------------------------------------------------------
|
|   View constructor
|
*/

const EventEmitter = require('events');
const create = require('lodash/create');
const extend = require('lodash/extend');
const has = require('lodash/has');
const pick = require('lodash/pick');
const uniqueId = require('lodash/uniqueId');

function View(options) {
    EventEmitter.call(this);
    var self = this;
    this.cid = uniqueId('view');
    extend(this, pick(options, [ 'element' ]));
    ensureElement.call(this);
    
    this.element.addEventListener('click', function(event) {
        self.emit('click', event);
    });
    
    this.initialize(options);
}

function ensureElement() {
    if (!this.element) {
        var elem = document.createElement(this.tagName);
        if (this.id) elem.setAttribute('id', this.id);
        if (this.className) elem.setAttribute('class', this.className);
        this.element = elem;
    }
}

extend(View.prototype, EventEmitter.prototype, {
    
    cid: null,
    
    tagName: 'div',
    
    className: null,
    
    element: null,
    
    initialize: function() {}
    
});

View.extend = function(proto, static) {
    var parent = this;
    var child;
    
    if (proto && has(proto, 'constructor')) {
        child = proto.constructor;
    } else {
        child = function(){ return parent.apply(this, arguments); };
    }
    extend(child, parent, static);
    
    child.prototype = create(parent.prototype, proto);
    child.prototype.constructor = child;
    child.__super__ = parent.prototype;
    
    return child;
}

module.exports = View;
