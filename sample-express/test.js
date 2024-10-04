let string = '1'
let number = 1
let result

const calculate = (a, b) => a + b

result = calculate(number, number)
console.log('value: ', result,' type: ', typeof(result))

result = calculate(string, number)
console.log('value: ', result,' type: ', typeof(result))