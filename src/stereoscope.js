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
        /**
         * Parallax options
         * @property    {Object}    attributes
         * @property    {String}    attributes.type
         * @property    {String}    attributes.speed
         * @property    {String}    backgroundId
         * @property    {String}    backgroundDOMElement
         */
        options: {
            attributes: {
                type: 'data-type',
                speed: 'data-speed'
            },
            backgroundId: 'background',
            backgroundDOMElement: 'section'
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
            this.backgrounds = Array.prototype.slice.call(document.querySelectorAll(this.options.backgroundDOMElement+'['+this.options.attributes.type+'='+this.options.backgroundId+']'));

            this.backgrounds.forEach(function(bkgd, idx) {
                this.setupScrollListener(bkgd);
            }.bind(this));

            return this.backgrounds;
        },
        /**
         * Sets the position of the background image based on the defined speed
         * @param   {HTMLElement}   background
         * @returns undefined
         */
        setupScrollListener: function(background) {
            var yPos, coords,
                speed = background.getAttribute(this.options.attributes.speed);

            window.addEventListener('scroll', function() {
                yPos = -(window.scrollY / speed);
                coords = '50% '+ yPos + 'px';
                background.style.backgroundPosition = coords;
            });
        }
    }

});