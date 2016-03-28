// 1. Default parameters
function say(msg = 'Hello!') {
    console.log(msg)
}

say()
say('I mean hey!')

// 2. Rest parameter
// TODO: this comes after destructuring
function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9

// TODO: destr, default, named