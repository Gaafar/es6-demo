// 1. Object
const {version, year} = {version: "ES6", year: "2015"}

console.log(version, year) // [3,4]

// 2. Deep
const {name:{first, last}} = {name: {first: "ECMA", last:"Script"}}

console.log(first, last) // ECMA Script

// 3. Named
const {name:{first:f, last:l}} = {name: {first: "ECMA", last:"Script"}}

console.log(f, l) // ECMA Script

// 4. Array
const [one, two, ...rest] = [1, 2, 3, 4]

console.log(one, two) // 1 2
console.log(rest) // [3,4]