'use strict';

module.exports = function (grunt) {
    
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    //update the jit-grunt configuration as follows, to inform it that useminPrepare task depends on the usemin package
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Define the configuration for all the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Make sure code styles are up to par and there are no obvious mistakes
        //Config info for the jshint tasks    
        //The JSHint task is set to examine all the JavaScript files in the app/scripts folder, and the Gruntfile.js and generate any reports of JS errors or warnings.    
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },

            all: {
                src: [
                    'Gruntfile.js',
                    'app/scripts/{,*/}*.js'
                ]
            }
        },
        
        useminPrepare: {
            html: 'app/menu.html',
            options: {
                dest: 'dist'
            }
        },

        // Concat
        concat: {
            options: {
                separator: ';'
            },

            // dist configuration is provided by useminPrepare
            dist: {}
        },

        // Uglify
        uglify: {
            // dist configuration is provided by useminPrepare
            dist: {}
        },

        cssmin: {
            dist: {}
        },

        // Filerev
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },

            release: {
                // filerev:release hashes(md5) all assets (images, js and css )
                // in dist directory
                files: [{
                    src: [
                        'dist/scripts/*.js',
                        'dist/styles/*.css',
                    ]
                }]
            }
        },
  
        // Usemin
        // Replaces all assets with their revved version in html and css files.
        // options.assetDirs contains the directories for finding the assets
        // according to their relative paths
        usemin: {
            html: ['dist/*.html'],
            css: ['dist/styles/*.css'],
            options: {
                assetsDirs: ['dist', 'dist/styles']
            }
        },

        copy: {
            dist: {
                cwd: 'app',
                src: [ '**','!styles/**/*.css','!scripts/**/*.js' ],
                dest: 'dist',
                expand: true
            },

            fonts: {
                files: [
                    {
                        //for bootstrap fonts
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    }, {
                        //for font-awesome
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/font-awesome',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    }
                ]
            }
        },
        
        watch: {
            copy: {
                files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
                tasks: [ 'build' ]
            },

            scripts: {
                files: ['app/scripts/app.js'],
                tasks:[ 'build']
            },

            styles: {
                files: ['app/styles/mystyles.css'],
                tasks:['build']
            },

            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },

                files: [
                    'app/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },

            dist: {
                options: {
                    open: true,
                    base:{
                        path: 'dist',
                        options: {
                            index: 'menu.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },

        clean: {
            build: {
                src: [ 'dist/']
            }
        }
    });
    
    //Configure the build task and the default task
    grunt.registerTask('build', [
        'clean',
        'jshint',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'filerev',
        'usemin'
    ]);
    // now when I run grunt, or when I say grunt build, it will run clean first then jshint and copy, then it runs the copy task. Then all the files from the app folder will be copied to their distribution folder.
    //when running Grunt with only these 3 tasks [clean, jshint, copy], scripts and styles folders of dist are empty
    
    grunt.registerTask('serve',['build','connect:dist','watch']);

    grunt.registerTask('default',['build']);    
    
};