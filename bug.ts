function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const result = add(5, 3); // 8
console.log(result);

const result2 = subtract(10, 4); // 6
console.log(result2);

const result3 = multiply(7, 2); // 14
console.log(result3);

const result4 = divide(15, 0); // throws an error
console.log(result4);