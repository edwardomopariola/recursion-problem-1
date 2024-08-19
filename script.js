// problem 1 Write a javascript function to calculate the factorial of a number.

function factorial(x) {
    if (x === 0){ // checking the equation with strict equality.
        return 1; // If the equation above is valid retrun 1
    }
    return x * factorial(x - 1); // x! = x * (x-1)!
}
console.log(factorial(10));