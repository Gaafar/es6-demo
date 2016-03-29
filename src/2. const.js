// 1. Constant value
const pi = 3.141

try {
    pi = 3.1415
} catch (e) {
    console.log(e.toString()) // TypeError: Assignment to constant variable.
}

// 2. Constant reference
const math = {pi: 3.141} 

math.pi = 3.1415 // no errors

try {
    math = {pi: 3.1451}
} catch (e) {
    console.log(e.toString()) // TypeError: Assignment to constant variable.
}

// NOTE: it's a good practice to use const instead of let whenever possible to avoid unintended mutation