Promise = require('promise')
request = require('request')

var currentIP = new Promise(function(resolve, reject) {
  console.log('1. initializing promise')

  request('http://checkip.dyndns.com/', function(err, res, body) {
    ip = /(\d+\.?){4}/.exec(body)[0]

    console.log('7. fulfilling promise')
    if (ip) resolve(ip)
    else reject()
  })
})

console.log('2. after promise initialization')
currentIP.then(function(ip) {
  console.log('8. current IP is ' + ip)
})

currentIP.then(function(ip) {
  console.log('9. current IP is ' + ip + ' in another handler')
})


// promisable promise of promises
var promisable = new Promise(function(resolve, reject) {
  console.log('3. initializing promisable')
  resolve(currentIP)
})

promisable.then(function(ip) {
  console.log('10. current IP is ' + ip + ' in promisable')
  console.log('you could press return key...')
  console.log('vvv next tick vvv')
  process.stdin.resume()
})


var immidiate = new Promise(function(resolve, reject) {
  resolve('immidiate')
  console.log('4. immidiate will be thened in next tick')
})
immidiate.then(function(s) {
  console.log('6. it is ' + s)
  console.log('vvv next tick vvv')
})

try {
  var immidiate = new Promise()
  immidiate.then(function(s) {
    console.log('it is ' + s)
  })
  immidiate.resolve('before-resolve immidiate')
} catch(e) {
  console.log('5. could not set handler before resolve stuff')
}

stdinOne = new Promise(function(resolve, reject) {
  process.stdin.on('data', function() {
    resolve('stdin one')
    process.stdin.end()
  })
})

Promise.all([immidiate, promisable, stdinOne, Promise.resolve('unknown one')])
  .then(function(res) {
    console.log('11. all promises resolved as ' + JSON.stringify(res))
  }
)

console.log('vvv next tick vvv')

stdinOne.then(function() {
  console.log('vvv next tick vvv')
  var promiseFirst = new Promise(function(resolve, reject) { resolve('first in chain') })

  var doFirst = function(v) { console.log('12. it is', v); return 'second in chain' }
  var doSecond = function(v) { console.log('13. it is', v) }

  promiseFirst
    .then(doFirst)
    .then(doSecond)
})
