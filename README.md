polymer-karma-test
==================

This repo is designed as a simple boilerplate for having multiple polymer elements and Karma test runner.


### Install
`npm i`

### Run
`npm t`

## Known Issues

Karma fails currently, it seems as though Polymer loads the dependencies without any kind of resolution - so the "a-element" is getting loaded twice. See the logs:

```bash
DEBUG [web-server]: serving (cached): /Users/keith/Projects/polymer-karma-test/main/components/a/a.html
DEBUG [web-server]: serving (cached): /Users/keith/Projects/polymer-karma-test/main/components/b/b.html
DEBUG [web-server]: serving (cached): /Users/keith/Projects/polymer-karma-test/main/bower_components/polymer/polymer.html
DEBUG [web-server]: serving (cached): /Users/keith/Projects/polymer-karma-test/main/components/a/a.html
DEBUG [web-server]: serving (cached): /Users/keith/Projects/polymer-karma-test/main/bower_components/polymer/polymer-body.html
DEBUG [web-server]: serving (cached): /Users/keith/Projects/polymer-karma-test/main/bower_components/polymer/polymer.js
Firefox 29.0.0 (Mac OS X 10.9) ERROR
  Error: DuplicateDefinitionError: a type with name 'a-element' is already registered
  at /Users/keith/Projects/polymer-karma-test/main/bower_components/platform/platform.js:15

Firefox 29.0.0 (Mac OS X 10.9): Executed 0 of 2 ERROR (0 secs / 0 secs)
DEBUG [karma]: Run complete, exitting.
```
