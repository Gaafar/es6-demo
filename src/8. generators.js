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