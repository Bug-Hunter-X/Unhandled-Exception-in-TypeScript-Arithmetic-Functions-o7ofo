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

try {
  const result4 = divide(15, 0); // throws an error
  console.log(result4);
} catch (error) {
  console.error('An error occurred:', error.message);
}

//Alternative solution using optional chaining and nullish coalescing
function divide2(a: number, b: number): number | null {
  return b === 0 ? null : a / b;
}
const result5 = divide2(15,0) ?? 0; //result5 will be 0
console.log(result5);