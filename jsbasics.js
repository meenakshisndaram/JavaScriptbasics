//Arithmetic Operators
let num1 = 10;
let num2 = 5;

// Addition
let sum = num1 + num2;
console.log('Sum:', sum);

// Subtraction
let difference = num1 - num2;
console.log('Difference:', difference);

// Multiplication
let product = num1 * num2;
console.log('Product:', product);

// Division
let quotient = num1 / num2;
console.log('Quotient:', quotient);

// Modulus (Remainder)
let remainder = num1 % num2;
console.log('Remainder:', remainder);

// Increment
let incrementedNum = num1++;
console.log('Incremented Num:', incrementedNum);

// Decrement
let decrementedNum = num2--;
console.log('Decremented Num:', decrementedNum);



//Assignment operator
let x24= 5;    
// Subtraction Assignment
x24 -= 2; // Equivalent to x = x - 2;
console.log('After Subtraction:', x24);

// Multiplication Assignment
x24 *= 4; // Equivalent to x = x * 4;
console.log('After Multiplication:', x24);

// Division Assignment
x24 /= 2; // Equivalent to x = x / 2;
console.log('After Division:', x24);

// Modulus Assignment
x24 %= 3; // Equivalent to x = x % 3;
console.log('After Modulus:', x24);

// Exponentiation Assignment
x24 **= 2; // Equivalent to x = x ** 2;
console.log('After Exponentiation:', x24);


// Logical Operators
let isTrue = true;
let isFalse = false;

// Logical AND (&&)
let resultAND = isTrue && isFalse;
console.log('Logical AND:', resultAND);

// Logical OR (||)
let resultOR = isTrue || isFalse;
console.log('Logical OR:', resultOR);

// Logical NOT (!)
let resultNOT = !isTrue;
console.log('Logical NOT:', resultNOT);

// Combining Logical Operators
let resultCombined = (isTrue && isFalse) || !isFalse;
console.log('Combined Logical Operators:', resultCombined);

// Truthy and Falsy Values
let truthyValue = 'Hello'; // Truthy
let falsyValue = ''; // Falsy

console.log('Truthy Value:', truthyValue || 'Default Value');
console.log('Falsy Value:', falsyValue || 'Default Value');


 // Ternary Operator
 let isRaining1 = true;

 // Using Ternary Operator to assign a value based on a condition
 let weatherMessage = isRaining1 ? 'Bring an umbrella' : 'Enjoy the sunshine';
 console.log(weatherMessage);

 // Ternary Operator with multiple conditions
 let temperature1 = 25;
 let temperatureMessage =
     temperature1 > 30 ? 'It\'s hot outside' :
     temperature1 > 20 ? 'It\'s a pleasant day' :
     'It\'s a bit chilly';
 console.log(temperatureMessage);

 // Ternary Operator to determine if a number is even or odd
 let number = 42;
 let parityMessage = number % 2 === 0 ? 'Even' : 'Odd';
 console.log(`${number} is ${parityMessage}`);

 // Conditional Statements
 let temperature = 25;

 // If statement
 if (temperature > 30) {
     console.log('It\'s a hot day!');
 } else if (temperature > 20) {
     console.log('It\'s a pleasant day.');
 } else {
     console.log('It\'s a bit chilly.');
 }

 // Example with a boolean condition
 let isRaining = false;

 if (isRaining) {
     console.log('Bring an umbrella!');
 } else {
     console.log('No need for an umbrella.');
 }

 // Example with a string condition
 let dayOfWeek = 'Monday';

 if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
     console.log('It\'s the weekend!');
 } else {
     console.log('It\'s a weekday.');
 }

  // Switch Statement with fall-through
  let month = 2;
  let monthName;

  switch (month) {
      case 1:
          monthName = 'January';
          break;
      case 2:
          monthName = 'February';
          // fall-through to execute the next case
      case 3:
          monthName += ' (Winter is ending)';
          break;
      case 4:
          monthName = 'April';
          break;
      default:
          monthName = 'Invalid month';
  }

  console.log(`Month ${month} is ${monthName}.`);

   // While Loop Example
   let countWhile = 0;

   while (countWhile < 5) {
       console.log(`While loop iteration ${countWhile + 1}`);
       countWhile++;
   }

   // Do-While Loop Example
   let countDoWhile = 0;

   do {
       console.log(`Do-While loop iteration ${countDoWhile + 1}`);
       countDoWhile++;
   } while (countDoWhile < 5);


     // For Loop Example
     for (let i = 1; i <= 5; i++) {
        console.log(`For loop iteration ${i}`);
    }

    // For Loop with Continue Statement
    for (let j = 1; j <= 5; j++) {
        if (j === 3) {
            // Skip the iteration when j is 3
            continue;
        }
        console.log(`For loop with continue, iteration ${j}`);
    }

    // For Loop with Break Statement
    for (let k = 1; k <= 5; k++) {
        if (k === 4) {
            // Exit the loop when k is 4
            break;
        }
        console.log(`For loop with break, iteration ${k}`);
    }


var x11=100;
console.log(x11)


//const 
const x2=100
console.log(x2)
//  x2=89;     // in thei x2 is a const variable so we cannot change the value of x2
// if we try it it will be of a error
console.log(x2)

//type of
let y="sunddaram";
let y1=true;
let y2=9087;
let y3=9.87;
let y4=null;
let y5;
console.log(typeof(y));// String
console.log(typeof(y1))//boolean
console.log(typeof(y2))//number
console.log(typeof(y3))//number
console.log(typeof(y4))//object
console.log(typeof(y5))//undefine

//for each loop
let myarray=['meenakshi',"Sundaram" , 9087 , 303183];
for(ele of myarray){
console.log(ele)
}



//to String()
const fruits = ['apple', 'banana', 'orange'];
const fruitsString = fruits.toString();
console.log(fruitsString); // Output: 'apple,banana,orange'


//join()
const numbers = [1, 2, 3, 4, 5];
const numbersString = numbers.join(' - '); // Using ' - ' as the separator
console.log(numbersString); // Output: '1 - 2 - 3 - 4 - 5'

//pop()
const fruits1 = ['apple', 'banana', 'orange'];
const removedFruit = fruits1.pop();
console.log(removedFruit); // Output: 'orange'
console.log(fruits1); // Output: ['apple', 'banana']

//push()
const fruits2 = ['apple', 'banana'];
const newLength = fruits2.push('orange', 'grape');
console.log(newLength); // Output: 4
console.log(fruits2); // Output: ['apple', 'banana', 'orange', 'grape']

//shift()
const fruits3 = ['apple', 'banana', 'orange'];
const removedFruit1 = fruits3.shift();
console.log(removedFruit1); // Output: 'apple'
console.log(fruits3); // Output: ['banana', 'orange']

//unshift()
const fruits4 = ['banana', 'orange'];
const newLength1 = fruits4.unshift('apple', 'grape');
console.log(newLength1); // Output: 4
console.log(fruits4); // Output: ['apple', 'grape', 'banana', 'orange']

//concat()
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = ['x', 'y', 'z'];

const concatenatedArray = array1.concat(array2, array3);

console.log(concatenatedArray);
// Output: [1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z']

console.log(array1);
// Output: [1, 2, 3] (unchanged)
console.log(array2);
// Output: ['a', 'b', 'c'] (unchanged)
console.log(array3);
// Output: ['x', 'y', 'z'] (unchanged)

//slice()
const originalArray = [1, 2, 3, 4, 5];

// Slice from index 1 to 4 (excluding index 4)
const slicedArray = originalArray.slice(1, 4);

console.log(slicedArray);
// Output: [2, 3, 4]

console.log(originalArray);
// Output: [1, 2, 3, 4, 5] (unchanged)
  

//sort
const fruits5 = ['banana', 'apple', 'orange', 'grape'];

// Sorting in lexicographic order (alphabetical)
fruits5.sort();

console.log(fruits5);
// Output: ['apple', 'banana', 'grape', 'orange']

//reverse()
const fruits6 = ['apple', 'banana', 'orange', 'grape'];

// Reversing the array
fruits6.reverse();

console.log(fruits6);
// Output: ['grape', 'orange', 'banana', 'apple']

//concat()
const str1 = 'Hello';
const str2 = ' World';

const resultConcat = str1.concat(str2);

console.log(resultConcat);
// Output: Hello World

//replace()
const originalString = 'Hello, World!';

const replacedString = originalString.replace('Hello', 'Hi');

console.log(replacedString);
// Output: Hi, World!

//substring()
const originalString2 = 'Hello, World!';

const subString = originalString2.substring(0, 5);

console.log(subString);
// Output: Hello

//split()
const sentence = 'This is a sample sentence';

const words = sentence.split(' ');

console.log(words);
// Output: ['This', 'is', 'a', 'sample', 'sentence']

//trim()
const spacedString = '   Trim me   ';

const trimmedString = spacedString.trim();

console.log(trimmedString);
// Output: Trim me

//isInteger()
let num11 = 42;
let num22 = 3.14;
let str = 'Hello';

console.log(Number.isInteger(num11));  // Output: true
console.log(Number.isInteger(num22));  // Output: false
console.log(Number.isInteger(str));   // Output: false

//toString()
let number1 = 42;
let booleanValue = true;
let array = [1, 2, 3];
let object = { key: 'value' };

console.log(number1.toString());          // Output: '42'
console.log(booleanValue.toString());    // Output: 'true'
console.log(array.toString());           // Output: '1,2,3'
console.log(object.toString());          // Output: '[object Object]'

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype of Person
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Creating instances of Person
  const person1 = new Person('Alice', 25);
  const person2 = new Person('Bob', 30);
  
  // Using the method added via prototype
  person1.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.
  person2.sayHello(); // Output: Hello, my name is Bob and I am 30 years old.
  