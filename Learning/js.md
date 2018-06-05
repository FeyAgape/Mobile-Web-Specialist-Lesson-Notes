## Javascript Properties

Every string instance has a property called `length` that stores the number of characters in it. You can retrieve property information by appending the string with a period and the property name:

`console.log('Hello'.length); //5`

Built-in methods are called, or used, by appending an instance with a period, the name of the method, and opening (() and closing ()) parentheses. Consider the examples below:

`console.log('Hello'.toUpperCase()); // 'HELLO'`

`console.log('Hey'.startsWith('H')); // true`

`console.log('    Remove whitespace   '.trim()); // removes the whitespace. return the string without spacing`


## Libraries

Instance methods, by definition, require that you create an instance before you can use them. What if you want to call a method without an instance? That's where JavaScript libraries come in. Libraries contain methods that you can call without creating an instance. One such collection contains mathematical methods, aptly named the Math library.

Let's see how you call the .random() method from the Math library:

`console.log(Math.random() * 100); // random number between 0 and 1`

In the example above, we called the .random() method by appending the library name with a period, the name of the method, and opening (() and closing ()) parentheses. This method returns a random number between 0 and 100. This code prints a random number between 0 and 100.

To generate a random number between 0 and 50, we could multiply this result by 50, like so:

Math.random() * 50;
The answer in the example above will most likely be a decimal. To ensure the answer is a whole number, JavaScript provides a built-in method called Math.floor(). Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round a random number like this:

`console.log(Math.floor(Math.random() * 50));`
**In this case:** Math.random generates a random number between 0 and 1. We then multiply that number by 50, so now we have a number between 0 and 50. Then, Math.floor rounds the number down to the nearest whole number.

**example**

`console.log(Math.random() * 100); //returns a random decimal number 51.9140453742521` 

`console.log(Math.floor(Math.random() * 100)); Math.floor() returns a round up random number 34`

`console.log(Math.ceil(43.8)); // returns 44 Math.ceil() returns the smallest integer greater than or equal to a decimal number `

`console.log(Number.isInteger(2017)); returns true //Number.isInteger() checks if a number is an integer`


## Variables

P

# Review Types and Operators

1. Four essential data types in JavaScript include strings, numbers, booleans, and null.
2. Data is printed, or logged, to the console with `console.log()`.
3. Four built-in mathematical operators include `+, -, *, and /`.
4. JavaScript associates certain properties with different data types.
5. JavaScript has built-in methods for different data types.
6. Libraries are collections of methods that can be called without an instance.
7. You can write single-line comments with `//` and multi-line comments between `/* and */`.

