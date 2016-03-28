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
// TODO: 
