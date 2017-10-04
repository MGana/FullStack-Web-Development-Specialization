// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',
    // I set the base path as ../ meaning the base path is the top directory, which is the confusion directory, so anything that Is referred to here, will be with respect to that directory. 

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
      
    // list of files / patterns to load in the browser (all that I need for my application to run)
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/*.js',
      'test/unit/**/*.js'
    ],

    // list of files to exclude
    exclude: [
    'test/protractor.conf.js', 'test/e2e/*.js'
    ],  
      
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters:  https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true, 
      
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //the PhantomJS is a Phantom browser that can be used for carrying out testing, so that will not cause browsers to be started up.
     browsers: ['Chrome','PhantomJS', 'PhantomJS_custom'],

    // you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      //means that if my Karma exits, then it'll automatically kill the phantom browser that is running in the background.    
      exitOnResourceError: true
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun as false, meaning that My test run will be continuously running and watching the files. And whenever I make any changes it'll automatically re-run this test. This is a good way for you to keep you unit tests up and running while you're modifying the code, so that any time you modify and save a file, the tests are automatically re-run for you.
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity

      

  })
}