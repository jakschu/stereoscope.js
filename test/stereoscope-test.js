describe('stereoscope.js', function() {
    var S = window.Stereoscope;

    it('is an object', function(done) {
        expect(S).to.be.an('object');
        done();
    });

    it('has an options object', function (done) {
        expect(S.options).to.be.an('object');
        done();
    });

    it('has an init method', function (done) {
        expect(S.init).to.be.a('function');
        done();
    });

    it('has an setOptions method', function (done) {
        expect(S.setOptions).to.be.a('function');
        done();
    });

    it('has a getBackgrounds method', function (done) {
        expect(S.getBackgrounds).to.be.a('function');
        done();
    });

    it('has a setupScrollListener method', function (done) {
        expect(S.setupScrollListener).to.be.a('function');
        done();
    });

    describe('The init method', function() {
        var backgrounds = [];

        before(function(done) {
            var i;
            for(i = 0; i < 3; i++) {
                var bkg = document.createElement('section');
                bkg.id = 'slide-' + i;
                bkg.setAttribute('data-type', 'background');
                bkg.setAttribute('data-speed', '4');
                backgrounds.push(bkg);
                document.body.appendChild(bkg);
            }
            done();
        });

        after(function(done) {
            var i;
            for(i = 0; i < backgrounds.length; i++) {
                document.body.removeChild(backgrounds[i]);
            }
            backgrounds = [];
            done();
        });

        it('can initialize a new stereoscope object', function(done) {
            expect(S.init()).to.be.an('object');
            done();
        });
    });
});