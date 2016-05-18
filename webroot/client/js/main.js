(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
*  require all files here
*/

var $ = require('./utils')();

(function(window, document, undefined, callback){

    document.addEventListener('DOMContentLoaded', function(evt) {
        //.. handle scripts on content loaded
        // This will fire first

        $.qSelect('.container-hamburger').onclick = function (evt) {
            console.log(this.parentNode);
            $.toggleClass(this.parentNode, 'items-visible');
        };

        $.qSelect('.scroll').onmouseout = function (evt) { 
            $.addClass('-dimAndShrink');
        };

    });

    window.onload = function () {
        //.. handle scripts on window loaded
        // This will fire second

        
    };
})(window, document, undefined, function(){});

},{"./utils":2}],2:[function(require,module,exports){
module.exports = function utils(){
    
    var ERR = {
        '001': 'Dom node is undefined.',
        '002': 'Define a class name or an array of class names as the 2nd argument.'
    };

    var publicAPI = publicAPI === undefined ? {} : publicAPI;

    publicAPI['qSelect'] = function select(selector, el) {
        if (!el) {el = document;}
        if (typeof selector === 'string') {
            return el.querySelector(selector);
        } 
    };

    publicAPI['qSelectAll'] = function selectAll(selector, el) {
        if (!el) {el = document;}
        if (typeof selector === 'string') {
            var selectedElements = el.querySelectorAll(selector);
            return Array.prototype.slice.call(selectedElements);
        }
    };

    publicAPI['addClass'] = function(elm, className, cb){
        if (!className || className === undefined) {
            return ERR['002'];
        }
        if (!elm || className === undefined) {
            return ERR['001'];
        } else if (typeof cb === 'function' && !!cb) {
            elm.classList.add(className);
            cb(elm);
        } else {
            if (Array.isArray(className)) {
                className.forEach(function(_class, index, collection){
                    elm.classList.add(_class);
                });
            } else {    
                elm.classList.add(className);
            }
        }
    };

    publicAPI['toggleClass'] = function toggleClass(elm, className, cb) {
        if (!className || className === undefined) {
            return ERR['002'];
        } 
        if (!elm || className === undefined) {
            return ERR['001'];
        }
        else if (typeof cb === 'function' && !!cb) {
            elm.classList.toggle(className);
            cb(elm);
        }
        else {
            if (Array.isArray(className)) {
                className.forEach(function(_class, i, col){
                    elm.classList.toggle(name);
                });
            } else {
                elm.classList.toggle(className);
            } 
        }
    }

    return publicAPI;
};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
