/**
 * @module Stereoscope
 * A nice parallax effect
 * @author Stéphane P. Péricat <contact@shortwavapp.com>
 * @license MIT
 */
(function(root, factory) {

    if (typeof define === "function" && define.amd) {
      define(factory);
    } else {    
      root.Stereoscope = factory();
    }

})(window, function() {

    return {
        options: {
            type: 'scrolling',
            attributes: {
                type: 'data-type',
                speed: 'data-speed'
            }
        },
        backgrounds: [],
        /**
         * Initializes the parallax
         * @param   {Object}    options
         * @returns {Object}    this
         */
        init: function(options) {
            if(options) this.options = options;

            this.getBackgrounds();

            return this;
        },
        /**
         * Gets the backgrounds
         * @returns {Nodelist}    this.backgrounds
         */
        getBackgrounds: function() {
            this.backgrounds = Array.prototype.slice.call(document.querySelectorAll('section['+this.options.attributes.type+'=background]'));

            this.backgrounds.forEach(function(bkgd, idx) {
                this.setupScrollListener(bkgd);
            }.bind(this));

            return this.backgrounds;
        },

        setupScrollListener: function(obj) {
            var yPos, coords;

            window.addEventListener('scroll', function() {
                yPos = -(window.scrollY / obj.getAttribute('data-speed'));
                coords = '50% '+ yPos + 'px';
                obj.style.backgroundPosition = coords;
            });
        }
    }

});