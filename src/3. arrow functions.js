const versions = [
    { name: "ES5", year: "2009" },
    { name: "ES6", year: "2015" },
    { name: "ES7", year: "NA" }
]

// 1. Expression (one-liner)  
const years = versions.map(v => v.year)

console.log(years) // ["2009", "2015", "NA"]

// 2. Function Body
const history = versions.map((v) => {
    const note = v.name + " was release in " + v.year
    return note;
})

console.log(history) // ["ES5 was release in 2009", "ES6 was release in 2015", "ES7 was release in NA"]

// 3. Define function
const add = (a, b) => a + b

console.log(add(1,2)) //3

// 4. Lexical this
const operations = {
  input: [1, 2, 3, 4],
  value: 2,
  add: function () {
    return this.input.map(function(el){return el + this.value})
  },
  addArrow: function () {
    return this.input.map((el) => el + this.value)
  }
}

console.log(operations.add()) // [null,null,null,null]
console.log(operations.addArrow()) // [3,4,5,6]