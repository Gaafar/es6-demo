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