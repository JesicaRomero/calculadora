let sum = (op1, op2 = 0, op3 = 0) => op1 + op2 + op3

let subs = (op1, op2 = 0) => op1 - op2

let mult = (op1, op2 = 0) => op1 * op2

let div = (op1, op2 = 0) => op1 / op2

let square = (op1) => op1 * op1

module.exports = { sum, subs, mult, div, square }
