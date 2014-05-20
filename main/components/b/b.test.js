describe('<b-element>', function () {
    before(function(done) {
        var l = document.createElement('link');
        l.rel = 'import';
        l.href = 'base/main/components/b/b.html';
        document.head.appendChild(l);
        l.onload = function() {
          done();
        };
    });

    it('crazy deep selector', function () {
        var bElement = document.createElement('b-element');
        var actual = bElement.shadowRoot.querySelector('div').textContent;
        var expected = 'Hello World';
        assert.equal(actual, expected);
    });
});
