function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, 2); // Correct usage
console.log(result); // Outputs 3

//Alternatively, a more robust solution would be to use type assertion, but this approach is error-prone
// and should only be used in cases where you fully understand and accept the implications.

function addWithAssertion(a: number, b: any): number {
  return a + (b as number);
}

const result2 = addWithAssertion(1, "2");
console.log(result2); //Outputs 3 (or NaN if input is not a number) 