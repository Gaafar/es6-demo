// 1. Default parameters
function say(msg = 'Hello!') {
    console.log(msg)
}

say() // Hello!
say('I mean hey!') // I mean hey!

// 2. Rest parameter
function f (x, ...arr) {
    return x * arr.length
}

console.log(f(2, 5, "hello", true, 7)) // 8

// 3. object destructuring, named, default value, fail-soft
function sayName({name:n = "Human"} = {}){
  console.log(n)
}

sayName() // Human
sayName({name: "Robot"}) // Robot

// 4. array destructuring
function sumFirstTwo([a,b]){
  console.log(a+b)
}

sumFirstTwo([5,1,8,0]) // 6