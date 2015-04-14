function Subject() {
    this.observers = []
}

Subject.prototype.observe = function observe(observer) {
    this.observers.push(observer)
}

Subject.prototype.unobserve = function unobserve(observer) {
    var i = 0, l = this.observers.length
    while (i < l && this.observers[i] !== observer)
        i++
    if (i < l)
        this.observers.splice(i, 1)
}

Subject.prototype.notify = function notify() {
    var args = [].slice.call(arguments)
    this.observers.forEach(function(observer) {
        observer.update.apply(null, args)
    })
}

var subject = new Subject()

var observerOne = new Observer('One')
var observerTwo = new Observer('Two')
var observerThree = new Observer('Three')

subject.observe(observerOne)
subject.notify('observerOne was notified')
subject.observe(observerTwo)
subject.notify('observerOne and observerTwo were notified')
console.log('')

subject.unobserve(observerOne)
subject.notify('observerTwo was notified')
console.log('')

subject.observe(observerOne)
subject.observe(observerThree)
subject.notify('All observers were notified')

function Observer(name) {
    this.update = function() {
        console.log('observer' + name + ' is updated with the following data:', JSON.stringify(arguments))
    }
}