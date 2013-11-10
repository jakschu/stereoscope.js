#stereoscope.js#

A customizable parallax scrolling effect for es5.


##Installation##

###Basic###

    git clone git@github.com:stephanepericat/stereoscope.js.git

###Via Bower###

    bower install stephanepericat/stereoscope.js

##Usage##

###Basic###

    <script src="src/stereoscope.js"></script>
    <script>
        Stereoscope.init({
            attributes: {
                type: 'data-type',
                speed: 'data-speed'
            },
            backgroundId: 'background',
            backgroundDOMElement: 'section'
        });
    </script>

###With Require.js###

    require(['src/stereoscope'], function() {
        Stereoscope.init({
            attributes: {
                type: 'data-type',
                speed: 'data-speed'
            },
            backgroundId: 'background',
            backgroundDOMElement: 'section'
        });
    });

##Options##

 - `attributes`: {Object} the type & speed attributes
 - `attributes.type`: {String} the name of the type attribute
 - `attributes.speed`: {String} the name of the speed attribute
 - `backgroundId`: {String} the value of the type attribute
 - `backgroundDOMElement`: {String} the type of dom node for backgrounds

##Test##

    npm install
    npm test

