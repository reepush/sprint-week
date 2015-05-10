var Q  = require('q'),
    fs = require('fs')

// promise from function
// var promise = Q.fcall(function() { return 19 })
// promise.then(function(v) {
//   console.log(v)
// })

// delay with deferred
// function delay(ms) {
//   var deferred = Q.defer()
//   setTimeout(deferred.resolve, ms)
//   return deferred.promise
// }

// delay without deferred
// delay = function(ms) {
//   return Q.Promise(function(resolve) {
//     setTimeout(resolve, ms)
//   })
// }

// easy delay
// delay = Q.delay

// console.log('waiting 10s...')
// delay(10*100).then(function() {
//   console.log('done!')
// })

// immidiate (then before resolve)
// with then/promise it was impossible to make this order
// var deferred = Q.defer()
// deferred.promise.then(function(v) { console.log(v) })
// deferred.resolve('immidiate in next tick!')

// over the wire
// promise = Q.fcall(function() { return [ { property: 'first' }, { property: 'second' } ] })
// promise
//   .get(0)
//   .get('property')
// .then(function(v) { console.log(v) })

// callback to promise
// function readFile(filename) {
//   return Q.nfcall(fs.readFile, filename, 'utf-8')
// }

// readFile('package.json')
//   .then(console.log)

// long stack traces
// function async() {
//   Q.delay(1000).done(function explode() {
//     throw new Error('boo!')
//   })
// }

// Q.longStackSupport = true
// async()
