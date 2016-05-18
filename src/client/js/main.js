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
