function callback() {
    console.log("this is the callback function")
}

function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('this should return a named function')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('this should return an anonymous function')
    }
}
