polymer-karma-test
==================

This repo is designed as a simple boilerplate for having multiple polymer elements and Karma test runner.

`polymer.html` is loaded in the `test/karma-loader.js`, and after `polymer-ready` fires, mocha will start running.

The tests in `main/components/a/a.test.js` and `main/components/b/b.test.js` each manage adding their own `link` tags to the document in the `before` setup block. This setup is quick and dirty but you could probably create a function that takes an array of imports and loads them all into the `head` for you.
You have to listen for the load even from the `link` tag to know when it's ok to start testing.
