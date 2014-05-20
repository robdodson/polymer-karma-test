var assert = chai.assert;
describe('<a-element>', function () {
    before(function(done) {
        var l = document.createElement('link');
        l.rel = 'import';
        l.href = 'base/main/components/a/a.html';
        document.head.appendChild(l);
        l.onload = function() {
          done();
        };
    });

    it('is a thing', function () {
        var aElement = document.createElement('a-element');
        var actual = aElement.foo;
        var expected = 'bar';
        assert.equal(actual, expected);
    });
});
