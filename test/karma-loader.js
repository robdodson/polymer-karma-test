'use strict';
mocha.setup('bdd');
mocha.globals(['jQuery*']);
window.__karma__.loaded = function () {};
window.addEventListener('polymer-ready', function run() {
    window.__karma__.start();
    window.removeEventListener('polymer-ready', run);
});
