## 1. let       		
```javascript
var x = 0

// 1. Block scoped
// i does not exist outside the loop
for (let i = 0; i < 10; i++) {
    x += 10
}

try {
    console.log(i)
} catch (e) {
    console.log(e.toString()) // ReferenceError: i is not defined
}

// 2. Hoisted to block scope, but can't be used before declaration
let y = 1

try {
	console.log(y)
	// let is hoisted to block scope, but can't be used before declaration
    let y = 10
	// NOTE: babel converts this to `var` so it will work in the transpiled code
} catch (e) {
    console.log(e.toString()) // ReferenceError: y is not defined
}
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=var%20x%20%3D%200%0A%0A%2F%2F%201.%20Block%20scoped%0A%2F%2F%20i%20does%20not%20exist%20outside%20the%20loop%0Afor%20(let%20i%20%3D%200%3B%20i%20%3C%2010%3B%20i%2B%2B)%20%7B%0A%20%20%20%20x%20%2B%3D%2010%0A%7D%0A%0Atry%20%7B%0A%20%20%20%20console.log(i)%0A%7D%20catch%20(e)%20%7B%0A%20%20%20%20console.log(e.toString())%20%2F%2F%20ReferenceError%3A%20i%20is%20not%20defined%0A%7D%0A%0A%2F%2F%202.%20Hoisted%20to%20block%20scope%2C%20but%20can't%20be%20used%20before%20declaration%0Alet%20y%20%3D%201%0A%0Atry%20%7B%0A%09console.log(y)%0A%09%2F%2F%20let%20is%20hoisted%20to%20block%20scope%2C%20but%20can't%20be%20used%20before%20declaration%0A%20%20%20%20let%20y%20%3D%2010%0A%09%2F%2F%20NOTE%3A%20babel%20converts%20this%20to%20%60var%60%20so%20it%20will%20work%20in%20the%20transpiled%20code%0A%7D%20catch%20(e)%20%7B%0A%20%20%20%20console.log(e.toString())%20%2F%2F%20ReferenceError%3A%20y%20is%20not%20defined%0A%7D">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=var%20x%20%3D%200%0A%0A%2F%2F%201.%20Block%20scoped%0A%2F%2F%20i%20does%20not%20exist%20outside%20the%20loop%0Afor%20(let%20i%20%3D%200%3B%20i%20%3C%2010%3B%20i%2B%2B)%20%7B%0A%20%20%20%20x%20%2B%3D%2010%0A%7D%0A%0Atry%20%7B%0A%20%20%20%20console.log(i)%0A%7D%20catch%20(e)%20%7B%0A%20%20%20%20console.log(e.toString())%20%2F%2F%20ReferenceError%3A%20i%20is%20not%20defined%0A%7D%0A%0A%2F%2F%202.%20Hoisted%20to%20block%20scope%2C%20but%20can't%20be%20used%20before%20declaration%0Alet%20y%20%3D%201%0A%0Atry%20%7B%0A%09console.log(y)%0A%09%2F%2F%20let%20is%20hoisted%20to%20block%20scope%2C%20but%20can't%20be%20used%20before%20declaration%0A%20%20%20%20let%20y%20%3D%2010%0A%09%2F%2F%20NOTE%3A%20babel%20converts%20this%20to%20%60var%60%20so%20it%20will%20work%20in%20the%20transpiled%20code%0A%7D%20catch%20(e)%20%7B%0A%20%20%20%20console.log(e.toString())%20%2F%2F%20ReferenceError%3A%20y%20is%20not%20defined%0A%7D">Transpiled</a>

## 2. const       		
```javascript
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
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=%2F%2F%201.%20Constant%20value%0Aconst%20pi%20%3D%203.141%0A%0Atry%20%7B%0A%20%20%20%20pi%20%3D%203.1415%0A%7D%20catch%20(e)%20%7B%0A%20%20%20%20console.log(e.toString())%20%2F%2F%20TypeError%3A%20Assignment%20to%20constant%20variable.%0A%7D%0A%0A%2F%2F%202.%20Constant%20reference%0Aconst%20math%20%3D%20%7Bpi%3A%203.141%7D%20%0A%0Amath.pi%20%3D%203.1415%20%2F%2F%20no%20errors%0A%0Atry%20%7B%0A%20%20%20%20math%20%3D%20%7Bpi%3A%203.1451%7D%0A%7D%20catch%20(e)%20%7B%0A%20%20%20%20console.log(e.toString())%20%2F%2F%20TypeError%3A%20Assignment%20to%20constant%20variable.%0A%7D%0A%0A%2F%2F%20NOTE%3A%20it's%20a%20good%20practice%20to%20use%20const%20instead%20of%20let%20whenever%20possible%20to%20avoid%20unintended%20mutation">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=%2F%2F%201.%20Constant%20value%0Aconst%20pi%20%3D%203.141%0A%0Atry%20%7B%0A%20%20%20%20pi%20%3D%203.1415%0A%7D%20catch%20(e)%20%7B%0A%20%20%20%20console.log(e.toString())%20%2F%2F%20TypeError%3A%20Assignment%20to%20constant%20variable.%0A%7D%0A%0A%2F%2F%202.%20Constant%20reference%0Aconst%20math%20%3D%20%7Bpi%3A%203.141%7D%20%0A%0Amath.pi%20%3D%203.1415%20%2F%2F%20no%20errors%0A%0Atry%20%7B%0A%20%20%20%20math%20%3D%20%7Bpi%3A%203.1451%7D%0A%7D%20catch%20(e)%20%7B%0A%20%20%20%20console.log(e.toString())%20%2F%2F%20TypeError%3A%20Assignment%20to%20constant%20variable.%0A%7D%0A%0A%2F%2F%20NOTE%3A%20it's%20a%20good%20practice%20to%20use%20const%20instead%20of%20let%20whenever%20possible%20to%20avoid%20unintended%20mutation">Transpiled</a>

## 3. arrow functions       		
```javascript
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
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=const%20versions%20%3D%20%5B%0A%20%20%20%20%7B%20name%3A%20%22ES5%22%2C%20year%3A%20%222009%22%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20%22ES6%22%2C%20year%3A%20%222015%22%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20%22ES7%22%2C%20year%3A%20%22NA%22%20%7D%0A%5D%0A%0A%2F%2F%201.%20Expression%20(one-liner)%20%20%0Aconst%20years%20%3D%20versions.map(v%20%3D%3E%20v.year)%0A%0Aconsole.log(years)%20%2F%2F%20%5B%222009%22%2C%20%222015%22%2C%20%22NA%22%5D%0A%0A%2F%2F%202.%20Function%20Body%0Aconst%20history%20%3D%20versions.map((v)%20%3D%3E%20%7B%0A%20%20%20%20const%20note%20%3D%20v.name%20%2B%20%22%20was%20release%20in%20%22%20%2B%20v.year%0A%20%20%20%20return%20note%3B%0A%7D)%0A%0Aconsole.log(history)%20%2F%2F%20%5B%22ES5%20was%20release%20in%202009%22%2C%20%22ES6%20was%20release%20in%202015%22%2C%20%22ES7%20was%20release%20in%20NA%22%5D%0A%0A%2F%2F%203.%20Define%20function%0Aconst%20add%20%3D%20(a%2C%20b)%20%3D%3E%20a%20%2B%20b%0A%0Aconsole.log(add(1%2C2))%20%2F%2F3%0A%0A%2F%2F%204.%20Lexical%20this%0Aconst%20operations%20%3D%20%7B%0A%20%20input%3A%20%5B1%2C%202%2C%203%2C%204%5D%2C%0A%20%20value%3A%202%2C%0A%20%20add%3A%20function%20()%20%7B%0A%20%20%20%20return%20this.input.map(function(el)%7Breturn%20el%20%2B%20this.value%7D)%0A%20%20%7D%2C%0A%20%20addArrow%3A%20function%20()%20%7B%0A%20%20%20%20return%20this.input.map((el)%20%3D%3E%20el%20%2B%20this.value)%0A%20%20%7D%0A%7D%0A%0Aconsole.log(operations.add())%20%2F%2F%20%5Bnull%2Cnull%2Cnull%2Cnull%5D%0Aconsole.log(operations.addArrow())%20%2F%2F%20%5B3%2C4%2C5%2C6%5D">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=const%20versions%20%3D%20%5B%0A%20%20%20%20%7B%20name%3A%20%22ES5%22%2C%20year%3A%20%222009%22%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20%22ES6%22%2C%20year%3A%20%222015%22%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20%22ES7%22%2C%20year%3A%20%22NA%22%20%7D%0A%5D%0A%0A%2F%2F%201.%20Expression%20(one-liner)%20%20%0Aconst%20years%20%3D%20versions.map(v%20%3D%3E%20v.year)%0A%0Aconsole.log(years)%20%2F%2F%20%5B%222009%22%2C%20%222015%22%2C%20%22NA%22%5D%0A%0A%2F%2F%202.%20Function%20Body%0Aconst%20history%20%3D%20versions.map((v)%20%3D%3E%20%7B%0A%20%20%20%20const%20note%20%3D%20v.name%20%2B%20%22%20was%20release%20in%20%22%20%2B%20v.year%0A%20%20%20%20return%20note%3B%0A%7D)%0A%0Aconsole.log(history)%20%2F%2F%20%5B%22ES5%20was%20release%20in%202009%22%2C%20%22ES6%20was%20release%20in%202015%22%2C%20%22ES7%20was%20release%20in%20NA%22%5D%0A%0A%2F%2F%203.%20Define%20function%0Aconst%20add%20%3D%20(a%2C%20b)%20%3D%3E%20a%20%2B%20b%0A%0Aconsole.log(add(1%2C2))%20%2F%2F3%0A%0A%2F%2F%204.%20Lexical%20this%0Aconst%20operations%20%3D%20%7B%0A%20%20input%3A%20%5B1%2C%202%2C%203%2C%204%5D%2C%0A%20%20value%3A%202%2C%0A%20%20add%3A%20function%20()%20%7B%0A%20%20%20%20return%20this.input.map(function(el)%7Breturn%20el%20%2B%20this.value%7D)%0A%20%20%7D%2C%0A%20%20addArrow%3A%20function%20()%20%7B%0A%20%20%20%20return%20this.input.map((el)%20%3D%3E%20el%20%2B%20this.value)%0A%20%20%7D%0A%7D%0A%0Aconsole.log(operations.add())%20%2F%2F%20%5Bnull%2Cnull%2Cnull%2Cnull%5D%0Aconsole.log(operations.addArrow())%20%2F%2F%20%5B3%2C4%2C5%2C6%5D">Transpiled</a>

## 4. destructuring       		
```javascript
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
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=%2F%2F%201.%20Object%0Aconst%20%7Bversion%2C%20year%7D%20%3D%20%7Bversion%3A%20%22ES6%22%2C%20year%3A%20%222015%22%7D%0A%0Aconsole.log(version%2C%20year)%20%2F%2F%20%5B3%2C4%5D%0A%0A%2F%2F%202.%20Deep%0Aconst%20%7Bname%3A%7Bfirst%2C%20last%7D%7D%20%3D%20%7Bname%3A%20%7Bfirst%3A%20%22ECMA%22%2C%20last%3A%22Script%22%7D%7D%0A%0Aconsole.log(first%2C%20last)%20%2F%2F%20ECMA%20Script%0A%0A%2F%2F%203.%20Named%0Aconst%20%7Bname%3A%7Bfirst%3Af%2C%20last%3Al%7D%7D%20%3D%20%7Bname%3A%20%7Bfirst%3A%20%22ECMA%22%2C%20last%3A%22Script%22%7D%7D%0A%0Aconsole.log(f%2C%20l)%20%2F%2F%20ECMA%20Script%0A%0A%2F%2F%204.%20Array%0Aconst%20%5Bone%2C%20two%2C%20...rest%5D%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0A%0Aconsole.log(one%2C%20two)%20%2F%2F%201%202%0Aconsole.log(rest)%20%2F%2F%20%5B3%2C4%5D">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=%2F%2F%201.%20Object%0Aconst%20%7Bversion%2C%20year%7D%20%3D%20%7Bversion%3A%20%22ES6%22%2C%20year%3A%20%222015%22%7D%0A%0Aconsole.log(version%2C%20year)%20%2F%2F%20%5B3%2C4%5D%0A%0A%2F%2F%202.%20Deep%0Aconst%20%7Bname%3A%7Bfirst%2C%20last%7D%7D%20%3D%20%7Bname%3A%20%7Bfirst%3A%20%22ECMA%22%2C%20last%3A%22Script%22%7D%7D%0A%0Aconsole.log(first%2C%20last)%20%2F%2F%20ECMA%20Script%0A%0A%2F%2F%203.%20Named%0Aconst%20%7Bname%3A%7Bfirst%3Af%2C%20last%3Al%7D%7D%20%3D%20%7Bname%3A%20%7Bfirst%3A%20%22ECMA%22%2C%20last%3A%22Script%22%7D%7D%0A%0Aconsole.log(f%2C%20l)%20%2F%2F%20ECMA%20Script%0A%0A%2F%2F%204.%20Array%0Aconst%20%5Bone%2C%20two%2C%20...rest%5D%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0A%0Aconsole.log(one%2C%20two)%20%2F%2F%201%202%0Aconsole.log(rest)%20%2F%2F%20%5B3%2C4%5D">Transpiled</a>

## 5. parameters       		
```javascript
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
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=%2F%2F%201.%20Default%20parameters%0Afunction%20say(msg%20%3D%20'Hello!')%20%7B%0A%20%20%20%20console.log(msg)%0A%7D%0A%0Asay()%20%2F%2F%20Hello!%0Asay('I%20mean%20hey!')%20%2F%2F%20I%20mean%20hey!%0A%0A%2F%2F%202.%20Rest%20parameter%0Afunction%20f%20(x%2C%20...arr)%20%7B%0A%20%20%20%20return%20x%20*%20arr.length%0A%7D%0A%0Aconsole.log(f(2%2C%205%2C%20%22hello%22%2C%20true%2C%207))%20%2F%2F%208%0A%0A%2F%2F%203.%20object%20destructuring%2C%20named%2C%20default%20value%2C%20fail-soft%0Afunction%20sayName(%7Bname%3An%20%3D%20%22Human%22%7D%20%3D%20%7B%7D)%7B%0A%20%20console.log(n)%0A%7D%0A%0AsayName()%20%2F%2F%20Human%0AsayName(%7Bname%3A%20%22Robot%22%7D)%20%2F%2F%20Robot%0A%0A%2F%2F%204.%20array%20destructuring%0Afunction%20sumFirstTwo(%5Ba%2Cb%5D)%7B%0A%20%20console.log(a%2Bb)%0A%7D%0A%0AsumFirstTwo(%5B5%2C1%2C8%2C0%5D)%20%2F%2F%206">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=%2F%2F%201.%20Default%20parameters%0Afunction%20say(msg%20%3D%20'Hello!')%20%7B%0A%20%20%20%20console.log(msg)%0A%7D%0A%0Asay()%20%2F%2F%20Hello!%0Asay('I%20mean%20hey!')%20%2F%2F%20I%20mean%20hey!%0A%0A%2F%2F%202.%20Rest%20parameter%0Afunction%20f%20(x%2C%20...arr)%20%7B%0A%20%20%20%20return%20x%20*%20arr.length%0A%7D%0A%0Aconsole.log(f(2%2C%205%2C%20%22hello%22%2C%20true%2C%207))%20%2F%2F%208%0A%0A%2F%2F%203.%20object%20destructuring%2C%20named%2C%20default%20value%2C%20fail-soft%0Afunction%20sayName(%7Bname%3An%20%3D%20%22Human%22%7D%20%3D%20%7B%7D)%7B%0A%20%20console.log(n)%0A%7D%0A%0AsayName()%20%2F%2F%20Human%0AsayName(%7Bname%3A%20%22Robot%22%7D)%20%2F%2F%20Robot%0A%0A%2F%2F%204.%20array%20destructuring%0Afunction%20sumFirstTwo(%5Ba%2Cb%5D)%7B%0A%20%20console.log(a%2Bb)%0A%7D%0A%0AsumFirstTwo(%5B5%2C1%2C8%2C0%5D)%20%2F%2F%206">Transpiled</a>

## 6. string interpolation       		
```javascript
const version = "ES6"
console.log(`you are using ${version}, enjoy!`) // you are using ES6, enjoy!

console.log(`you can use expressions like this ${[1,2,3].map(v => v + 1)} too`) // you can use expressions like this 2,3,4 too

console.log(`or use new lines


like this`)
// or use new lines
//
//
// like this
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=const%20version%20%3D%20%22ES6%22%0Aconsole.log(%60you%20are%20using%20%24%7Bversion%7D%2C%20enjoy!%60)%20%2F%2F%20you%20are%20using%20ES6%2C%20enjoy!%0A%0Aconsole.log(%60you%20can%20use%20expressions%20like%20this%20%24%7B%5B1%2C2%2C3%5D.map(v%20%3D%3E%20v%20%2B%201)%7D%20too%60)%20%2F%2F%20you%20can%20use%20expressions%20like%20this%202%2C3%2C4%20too%0A%0Aconsole.log(%60or%20use%20new%20lines%0A%0A%0Alike%20this%60)%0A%2F%2F%20or%20use%20new%20lines%0A%2F%2F%0A%2F%2F%0A%2F%2F%20like%20this">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=const%20version%20%3D%20%22ES6%22%0Aconsole.log(%60you%20are%20using%20%24%7Bversion%7D%2C%20enjoy!%60)%20%2F%2F%20you%20are%20using%20ES6%2C%20enjoy!%0A%0Aconsole.log(%60you%20can%20use%20expressions%20like%20this%20%24%7B%5B1%2C2%2C3%5D.map(v%20%3D%3E%20v%20%2B%201)%7D%20too%60)%20%2F%2F%20you%20can%20use%20expressions%20like%20this%202%2C3%2C4%20too%0A%0Aconsole.log(%60or%20use%20new%20lines%0A%0A%0Alike%20this%60)%0A%2F%2F%20or%20use%20new%20lines%0A%2F%2F%0A%2F%2F%0A%2F%2F%20like%20this">Transpiled</a>

## 7. objects       		
```javascript
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
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=%2F%2F%201.%20property%20shorthand%0Aconst%20version%20%3D%20%22ES6%22%0Aconst%20year%20%3D%202015%0Aconst%20es6%20%3D%20%7Bversion%2C%20year%7D%0A%0Aconsole.log(es6.version)%20%2F%2F%20ES6%0Aconsole.log(es6.year)%20%2F%2F%202015%0A%0A%2F%2F%202.%20functions%0Aconst%20age%20%3D%2030%0Aconst%20user%20%3D%20%7B%0A%20%20age%2C%0A%20%20friends%3A%20100%2C%0A%20%20greet()%7B%0A%20%20%20%20console.log(%22Hello%22)%0A%20%20%7D%0A%7D%0A%0Auser.greet()%20%2F%2F%20Hello%0A%0A%2F%2F%203.%20setter%2C%20getter%0Aconst%20name%20%3D%20%7B%0A%20%20first%3A%20%22John%22%2C%0A%20%20last%3A%20%22Doe%22%2C%0A%20%20get%20full()%7B%0A%20%20%20%20return%20this.first%20%2B%20%22%20%22%20%2B%20this.last%0A%20%20%7D%2C%0A%20%20set%20full(value)%7B%0A%20%20%20%20console.log(%60cannot%20set%20full%20name%20to%20%24%7Bvalue%7D%60)%0A%20%20%7D%0A%7D%0A%0Aconsole.log(name.full)%20%2F%2F%20John%20Doe%0A%0Aname.full%20%3D%20%22Jane%20Doe%22%20%2F%2F%20cannot%20set%20full%20name%20to%20Jane%20Doe%0A%0Aconsole.log(name.full)%20%2F%2F%20John%20Doe">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=%2F%2F%201.%20property%20shorthand%0Aconst%20version%20%3D%20%22ES6%22%0Aconst%20year%20%3D%202015%0Aconst%20es6%20%3D%20%7Bversion%2C%20year%7D%0A%0Aconsole.log(es6.version)%20%2F%2F%20ES6%0Aconsole.log(es6.year)%20%2F%2F%202015%0A%0A%2F%2F%202.%20functions%0Aconst%20age%20%3D%2030%0Aconst%20user%20%3D%20%7B%0A%20%20age%2C%0A%20%20friends%3A%20100%2C%0A%20%20greet()%7B%0A%20%20%20%20console.log(%22Hello%22)%0A%20%20%7D%0A%7D%0A%0Auser.greet()%20%2F%2F%20Hello%0A%0A%2F%2F%203.%20setter%2C%20getter%0Aconst%20name%20%3D%20%7B%0A%20%20first%3A%20%22John%22%2C%0A%20%20last%3A%20%22Doe%22%2C%0A%20%20get%20full()%7B%0A%20%20%20%20return%20this.first%20%2B%20%22%20%22%20%2B%20this.last%0A%20%20%7D%2C%0A%20%20set%20full(value)%7B%0A%20%20%20%20console.log(%60cannot%20set%20full%20name%20to%20%24%7Bvalue%7D%60)%0A%20%20%7D%0A%7D%0A%0Aconsole.log(name.full)%20%2F%2F%20John%20Doe%0A%0Aname.full%20%3D%20%22Jane%20Doe%22%20%2F%2F%20cannot%20set%20full%20name%20to%20Jane%20Doe%0A%0Aconsole.log(name.full)%20%2F%2F%20John%20Doe">Transpiled</a>

## 8. generators       		
```javascript
function* fibonacci(n) {
    let pre = 0, cur = 1
    while (n-- > 0) {
        [pre, cur] = [cur, pre + cur]
        yield cur
    }
}

let numbers = [...fibonacci(10)]

console.log(numbers) // [1,2,3,5,8,13,21,34,55,89]

// TODO: class, promise
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=function*%20fibonacci(n)%20%7B%0A%20%20%20%20let%20pre%20%3D%200%2C%20cur%20%3D%201%0A%20%20%20%20while%20(n--%20%3E%200)%20%7B%0A%20%20%20%20%20%20%20%20%5Bpre%2C%20cur%5D%20%3D%20%5Bcur%2C%20pre%20%2B%20cur%5D%0A%20%20%20%20%20%20%20%20yield%20cur%0A%20%20%20%20%7D%0A%7D%0A%0Alet%20numbers%20%3D%20%5B...fibonacci(10)%5D%0A%0Aconsole.log(numbers)%20%2F%2F%20%5B1%2C2%2C3%2C5%2C8%2C13%2C21%2C34%2C55%2C89%5D%0A%0A%2F%2F%20TODO%3A%20class%2C%20promise">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=function*%20fibonacci(n)%20%7B%0A%20%20%20%20let%20pre%20%3D%200%2C%20cur%20%3D%201%0A%20%20%20%20while%20(n--%20%3E%200)%20%7B%0A%20%20%20%20%20%20%20%20%5Bpre%2C%20cur%5D%20%3D%20%5Bcur%2C%20pre%20%2B%20cur%5D%0A%20%20%20%20%20%20%20%20yield%20cur%0A%20%20%20%20%7D%0A%7D%0A%0Alet%20numbers%20%3D%20%5B...fibonacci(10)%5D%0A%0Aconsole.log(numbers)%20%2F%2F%20%5B1%2C2%2C3%2C5%2C8%2C13%2C21%2C34%2C55%2C89%5D%0A%0A%2F%2F%20TODO%3A%20class%2C%20promise">Transpiled</a>
