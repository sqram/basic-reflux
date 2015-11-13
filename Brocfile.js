var funnel = require('broccoli-funnel')
  , mergeTrees = require('broccoli-merge-trees')
  , stylus = require('broccoli-stylus-single')
  , fbrowserify = require('broccoli-fast-browserify')
  , babelify = require('babelify')
  , injectLivereload = require('broccoli-inject-livereload')
  , livereload = require('livereload')
  ;


// Start up live reload.
var server = livereload.createServer();
server.watch(__dirname + "/tmp");


// html tree
var html = funnel('src', {
  srcDir: '/',
  destDir: '/',
  files: ['index.html']
})
html = injectLivereload(html)



// create js input tree - then browserify
var js = funnel('src/js', {
  srcDir: '/',
  destDir: 'js'
})

// note: make sure you npm install babelify
var js = fbrowserify(js, {
  browserify: {
    extensions: ['.js']
  },
  bundles: {
    'js/build.js': {
      entryPoints: ['**/main.js'],
      transform: {
        tr: babelify
      }
    }
  }
});


// css tree
var styles = funnel('src/css', {
  srcDir: '/',
  destDir: 'css'
})
styles = stylus([styles], './css/sqram.styl', './css/sqram.css')


module.exports = mergeTrees([html, styles, js])