// 1. property shorthand
const version = "ES6"
const year = 2015
const es6 = {version, year}

console.log(es6.version) // ES6
console.log(es6.year) // 2015

// 2. functions
const age = 30
const user = {
  age,
  friends: 100,
  greet(){
    console.log("Hello")
  }
}

user.greet() // Hello

// 3. setter, getter
const name = {
  first: "John",
  last: "Doe",
  get full(){
    return this.first + " " + this.last
  },
  set full(value){
    console.log(`cannot set full name to ${value}`)
  }
}

console.log(name.full) // John Doe

name.full = "Jane Doe" // cannot set full name to Jane Doe

console.log(name.full) // John Doe