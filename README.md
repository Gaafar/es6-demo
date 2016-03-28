## 1. let       		
``` 
var x = 0

// 1. Block scoped
// i does not exist outside the loop
for (let i = 0; i < 10; i++) {
    x += 10
}

try {
    console.log(i)
} catch (e) {
    console.log(e) // ReferenceError: i is not defined
}

// 2. Not hoisted
try {
	console.log(y)
	// let is not hoisted
    let y = 10
	// NOTE: babel converts this to `var` so it will work in the transpiled code
} catch (e) {
    console.log(e) // ReferenceError: y is not defined
}
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=var%20x%20%3D%200%0D%0A%0D%0A%2F%2F%201.%20Block%20scoped%0D%0A%2F%2F%20i%20does%20not%20exist%20outside%20the%20loop%0D%0Afor%20(let%20i%20%3D%200%3B%20i%20%3C%2010%3B%20i%2B%2B)%20%7B%0D%0A%20%20%20%20x%20%2B%3D%2010%0D%0A%7D%0D%0A%0D%0Atry%20%7B%0D%0A%20%20%20%20console.log(i)%0D%0A%7D%20catch%20(e)%20%7B%0D%0A%20%20%20%20console.log(e)%20%2F%2F%20ReferenceError%3A%20i%20is%20not%20defined%0D%0A%7D%0D%0A%0D%0A%2F%2F%202.%20Not%20hoisted%0D%0Atry%20%7B%0D%0A%09console.log(y)%0D%0A%09%2F%2F%20let%20is%20not%20hoisted%0D%0A%20%20%20%20let%20y%20%3D%2010%0D%0A%09%2F%2F%20NOTE%3A%20babel%20converts%20this%20to%20%60var%60%20so%20it%20will%20work%20in%20the%20transpiled%20code%0D%0A%7D%20catch%20(e)%20%7B%0D%0A%20%20%20%20console.log(e)%20%2F%2F%20ReferenceError%3A%20y%20is%20not%20defined%0D%0A%7D">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=var%20x%20%3D%200%0D%0A%0D%0A%2F%2F%201.%20Block%20scoped%0D%0A%2F%2F%20i%20does%20not%20exist%20outside%20the%20loop%0D%0Afor%20(let%20i%20%3D%200%3B%20i%20%3C%2010%3B%20i%2B%2B)%20%7B%0D%0A%20%20%20%20x%20%2B%3D%2010%0D%0A%7D%0D%0A%0D%0Atry%20%7B%0D%0A%20%20%20%20console.log(i)%0D%0A%7D%20catch%20(e)%20%7B%0D%0A%20%20%20%20console.log(e)%20%2F%2F%20ReferenceError%3A%20i%20is%20not%20defined%0D%0A%7D%0D%0A%0D%0A%2F%2F%202.%20Not%20hoisted%0D%0Atry%20%7B%0D%0A%09console.log(y)%0D%0A%09%2F%2F%20let%20is%20not%20hoisted%0D%0A%20%20%20%20let%20y%20%3D%2010%0D%0A%09%2F%2F%20NOTE%3A%20babel%20converts%20this%20to%20%60var%60%20so%20it%20will%20work%20in%20the%20transpiled%20code%0D%0A%7D%20catch%20(e)%20%7B%0D%0A%20%20%20%20console.log(e)%20%2F%2F%20ReferenceError%3A%20y%20is%20not%20defined%0D%0A%7D">ES5</a>

## 2. const       		
``` 
// 1. Constant value
const pi = 3.141

try {
    pi = 3.1415
} catch (e) {
    console.log(e) // TypeError: Assignment to constant variable.
}

// 2. Constant reference
const math = {pi: 3.141} 

math.pi = 3.1415 // no errors

try {
    math = {pi: 3.1451}
} catch (e) {
    console.log(e) // TypeError: Assignment to constant variable.
}

// TODO: 
// NOTE: it's a good practice to use const instead of let whenever possible to avoid unintended mutation
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=%2F%2F%201.%20Constant%20value%0D%0Aconst%20pi%20%3D%203.141%0D%0A%0D%0Atry%20%7B%0D%0A%20%20%20%20pi%20%3D%203.1415%0D%0A%7D%20catch%20(e)%20%7B%0D%0A%20%20%20%20console.log(e)%20%2F%2F%20TypeError%3A%20Assignment%20to%20constant%20variable.%0D%0A%7D%0D%0A%0D%0A%2F%2F%202.%20Constant%20reference%0D%0Aconst%20math%20%3D%20%7Bpi%3A%203.141%7D%20%0D%0A%0D%0Amath.pi%20%3D%203.1415%20%2F%2F%20no%20errors%0D%0A%0D%0Atry%20%7B%0D%0A%20%20%20%20math%20%3D%20%7Bpi%3A%203.1451%7D%0D%0A%7D%20catch%20(e)%20%7B%0D%0A%20%20%20%20console.log(e)%20%2F%2F%20TypeError%3A%20Assignment%20to%20constant%20variable.%0D%0A%7D%0D%0A%0D%0A%2F%2F%20TODO%3A%20%0D%0A%2F%2F%20NOTE%3A%20it's%20a%20good%20practice%20to%20use%20const%20instead%20of%20let%20whenever%20possible%20to%20avoid%20unintended%20mutation">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=%2F%2F%201.%20Constant%20value%0D%0Aconst%20pi%20%3D%203.141%0D%0A%0D%0Atry%20%7B%0D%0A%20%20%20%20pi%20%3D%203.1415%0D%0A%7D%20catch%20(e)%20%7B%0D%0A%20%20%20%20console.log(e)%20%2F%2F%20TypeError%3A%20Assignment%20to%20constant%20variable.%0D%0A%7D%0D%0A%0D%0A%2F%2F%202.%20Constant%20reference%0D%0Aconst%20math%20%3D%20%7Bpi%3A%203.141%7D%20%0D%0A%0D%0Amath.pi%20%3D%203.1415%20%2F%2F%20no%20errors%0D%0A%0D%0Atry%20%7B%0D%0A%20%20%20%20math%20%3D%20%7Bpi%3A%203.1451%7D%0D%0A%7D%20catch%20(e)%20%7B%0D%0A%20%20%20%20console.log(e)%20%2F%2F%20TypeError%3A%20Assignment%20to%20constant%20variable.%0D%0A%7D%0D%0A%0D%0A%2F%2F%20TODO%3A%20%0D%0A%2F%2F%20NOTE%3A%20it's%20a%20good%20practice%20to%20use%20const%20instead%20of%20let%20whenever%20possible%20to%20avoid%20unintended%20mutation">ES5</a>

## 3. arrow functions       		
``` 
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

```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=const%20versions%20%3D%20%5B%0D%0A%20%20%20%20%7B%20name%3A%20%22ES5%22%2C%20year%3A%20%222009%22%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20%22ES6%22%2C%20year%3A%20%222015%22%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20%22ES7%22%2C%20year%3A%20%22NA%22%20%7D%0D%0A%5D%0D%0A%0D%0A%2F%2F%201.%20Expression%20(one-liner)%20%20%0D%0Aconst%20years%20%3D%20versions.map(v%20%3D%3E%20v.year)%0D%0A%0D%0Aconsole.log(years)%20%2F%2F%20%5B%222009%22%2C%20%222015%22%2C%20%22NA%22%5D%0D%0A%0D%0A%2F%2F%202.%20Function%20Body%0D%0Aconst%20history%20%3D%20versions.map((v)%20%3D%3E%20%7B%0D%0A%20%20%20%20const%20note%20%3D%20v.name%20%2B%20%22%20was%20release%20in%20%22%20%2B%20v.year%0D%0A%20%20%20%20return%20note%3B%0D%0A%7D)%0D%0A%0D%0Aconsole.log(history)%20%2F%2F%20%5B%22ES5%20was%20release%20in%202009%22%2C%20%22ES6%20was%20release%20in%202015%22%2C%20%22ES7%20was%20release%20in%20NA%22%5D%0D%0A%0D%0A%2F%2F%203.%20Define%20function%0D%0Aconst%20add%20%3D%20(a%2C%20b)%20%3D%3E%20a%20%2B%20b%0D%0A%0D%0Aconsole.log(add(1%2C2))%20%2F%2F3%0D%0A%0D%0A%2F%2F%204.%20Lexical%20this%0D%0A%2F%2F%20TODO%3A%20%0D%0A">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=const%20versions%20%3D%20%5B%0D%0A%20%20%20%20%7B%20name%3A%20%22ES5%22%2C%20year%3A%20%222009%22%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20%22ES6%22%2C%20year%3A%20%222015%22%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20%22ES7%22%2C%20year%3A%20%22NA%22%20%7D%0D%0A%5D%0D%0A%0D%0A%2F%2F%201.%20Expression%20(one-liner)%20%20%0D%0Aconst%20years%20%3D%20versions.map(v%20%3D%3E%20v.year)%0D%0A%0D%0Aconsole.log(years)%20%2F%2F%20%5B%222009%22%2C%20%222015%22%2C%20%22NA%22%5D%0D%0A%0D%0A%2F%2F%202.%20Function%20Body%0D%0Aconst%20history%20%3D%20versions.map((v)%20%3D%3E%20%7B%0D%0A%20%20%20%20const%20note%20%3D%20v.name%20%2B%20%22%20was%20release%20in%20%22%20%2B%20v.year%0D%0A%20%20%20%20return%20note%3B%0D%0A%7D)%0D%0A%0D%0Aconsole.log(history)%20%2F%2F%20%5B%22ES5%20was%20release%20in%202009%22%2C%20%22ES6%20was%20release%20in%202015%22%2C%20%22ES7%20was%20release%20in%20NA%22%5D%0D%0A%0D%0A%2F%2F%203.%20Define%20function%0D%0Aconst%20add%20%3D%20(a%2C%20b)%20%3D%3E%20a%20%2B%20b%0D%0A%0D%0Aconsole.log(add(1%2C2))%20%2F%2F3%0D%0A%0D%0A%2F%2F%204.%20Lexical%20this%0D%0A%2F%2F%20TODO%3A%20%0D%0A">ES5</a>

## 4. destructuring       		
``` 
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
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=%2F%2F%201.%20Object%0D%0Aconst%20%7Bversion%2C%20year%7D%20%3D%20%7Bversion%3A%20%22ES6%22%2C%20year%3A%20%222015%22%7D%0D%0Aconsole.log(version%2C%20year)%20%2F%2F%20%5B3%2C4%5D%0D%0A%0D%0A%2F%2F%202.%20Deep%0D%0Aconst%20%7Bname%3A%7Bfirst%2C%20last%7D%7D%20%3D%20%7Bname%3A%20%7Bfirst%3A%20%22ECMA%22%2C%20last%3A%22Script%22%7D%7D%0D%0Aconsole.log(first%2C%20last)%20%2F%2F%20ECMA%20Script%0D%0A%0D%0A%2F%2F%203.%20Named%0D%0Aconst%20%7Bname%3A%7Bfirst%3Af%2C%20last%3Al%7D%7D%20%3D%20%7Bname%3A%20%7Bfirst%3A%20%22ECMA%22%2C%20last%3A%22Script%22%7D%7D%0D%0Aconsole.log(f%2C%20l)%20%2F%2F%20ECMA%20Script%0D%0A%0D%0A%2F%2F%204.%20Array%0D%0Aconst%20%5Bone%2C%20two%2C%20...rest%5D%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0D%0Aconsole.log(one%2C%20two)%20%2F%2F%201%202%0D%0Aconsole.log(rest)%20%2F%2F%20%5B3%2C4%5D">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=%2F%2F%201.%20Object%0D%0Aconst%20%7Bversion%2C%20year%7D%20%3D%20%7Bversion%3A%20%22ES6%22%2C%20year%3A%20%222015%22%7D%0D%0Aconsole.log(version%2C%20year)%20%2F%2F%20%5B3%2C4%5D%0D%0A%0D%0A%2F%2F%202.%20Deep%0D%0Aconst%20%7Bname%3A%7Bfirst%2C%20last%7D%7D%20%3D%20%7Bname%3A%20%7Bfirst%3A%20%22ECMA%22%2C%20last%3A%22Script%22%7D%7D%0D%0Aconsole.log(first%2C%20last)%20%2F%2F%20ECMA%20Script%0D%0A%0D%0A%2F%2F%203.%20Named%0D%0Aconst%20%7Bname%3A%7Bfirst%3Af%2C%20last%3Al%7D%7D%20%3D%20%7Bname%3A%20%7Bfirst%3A%20%22ECMA%22%2C%20last%3A%22Script%22%7D%7D%0D%0Aconsole.log(f%2C%20l)%20%2F%2F%20ECMA%20Script%0D%0A%0D%0A%2F%2F%204.%20Array%0D%0Aconst%20%5Bone%2C%20two%2C%20...rest%5D%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0D%0Aconsole.log(one%2C%20two)%20%2F%2F%201%202%0D%0Aconsole.log(rest)%20%2F%2F%20%5B3%2C4%5D">ES5</a>

## 5. parameters       		
``` 
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
```
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=%2F%2F%201.%20Default%20parameters%0D%0Afunction%20say(msg%20%3D%20'Hello!')%20%7B%0D%0A%20%20%20%20console.log(msg)%0D%0A%7D%0D%0A%0D%0Asay()%0D%0Asay('I%20mean%20hey!')%0D%0A%0D%0A%2F%2F%202.%20Rest%20parameter%0D%0A%2F%2F%20TODO%3A%20this%20comes%20after%20destructuring%0D%0Afunction%20f%20(x%2C%20y%2C%20...a)%20%7B%0D%0A%20%20%20%20return%20(x%20%2B%20y)%20*%20a.length%0D%0A%7D%0D%0Af(1%2C%202%2C%20%22hello%22%2C%20true%2C%207)%20%3D%3D%3D%209%0D%0A%0D%0A%2F%2F%20TODO%3A%20destr%2C%20default%2C%20named">Try ES6</a> - <a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code=%2F%2F%201.%20Default%20parameters%0D%0Afunction%20say(msg%20%3D%20'Hello!')%20%7B%0D%0A%20%20%20%20console.log(msg)%0D%0A%7D%0D%0A%0D%0Asay()%0D%0Asay('I%20mean%20hey!')%0D%0A%0D%0A%2F%2F%202.%20Rest%20parameter%0D%0A%2F%2F%20TODO%3A%20this%20comes%20after%20destructuring%0D%0Afunction%20f%20(x%2C%20y%2C%20...a)%20%7B%0D%0A%20%20%20%20return%20(x%20%2B%20y)%20*%20a.length%0D%0A%7D%0D%0Af(1%2C%202%2C%20%22hello%22%2C%20true%2C%207)%20%3D%3D%3D%209%0D%0A%0D%0A%2F%2F%20TODO%3A%20destr%2C%20default%2C%20named">ES5</a>
