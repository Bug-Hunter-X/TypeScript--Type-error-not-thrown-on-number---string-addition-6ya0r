# TypeScript Type Error Not Thrown on Number + String Addition

This repository demonstrates a scenario where TypeScript fails to throw a type error when a number is added to a string. This can lead to unexpected behavior and subtle bugs in your applications.

## The Bug

The `add` function is defined to accept two numbers and return their sum. However, the code calls this function with a number and a string.  TypeScript does not issue a compile-time error; instead, the string is implicitly converted to a number, resulting in string concatenation instead of numerical addition.

## How to Reproduce

1. Clone this repository.
2. Compile and run the code using a TypeScript compiler.
3. Observe that the output is "12" instead of 3.

## The Solution

The solution is to make TypeScript strictly check the type in the add function. Use a stricter type checking and ensure that both parameters are of type number, preventing string concatenation and ensuring the correct arithmetic operation.
