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
      root.Stereoscope = factory;
    }
})(this, function() {

});