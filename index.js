// alert("Abu Taher Siddiki Adnan");
// document.write("Abu Taher Siddiki Adnan");
// console.log("Abu Taher Siddiki Adnan");

// Variable Declaration and Initialization

/*
 let name = 'Abu Taher Siddiki Adnan';
document.write(name);
let age = 23;
document.write(age);
name = 'Adnan';
document.write(name);
 */

// data type transformation

/* 
let a = '100';
a = parseInt(a);
console.log(a);

b = 200;
let c = b.toString();
console.log(c);
*/


// Set precision for float number
/* 
let x = 20.123456;
console.log(x.toFixed(2)); // Doshomik er por koto ghor dekhabe
console.log(x.toPrecision(5)); // Mot koto ghor dekhabe

*/
// Number functions
/*
console.log(Number('123.45')); // string ke number e convert korbe
console.log(Number('     123.45  ')); // age porer sb space bad diye sudhu number ta k nibe
*/


// String Concatination

/*
console.log('Abu Taher'+' Siddiki Adnan');
let firstName = 'Abu Taher ';
let lastName = 'Siddiki Adnan';
let fullName = firstName + lastName;
console.log('My full name is: '+fullName);
*/

// String library functions

/*
let text = 'Hello world! Welcome to JavaScript';
console.log('Length of the text: '+text.length); // string er length 
console.log(text.charAt(0)); // specific index er character
console.log(text.indexOf('JavaScript')); // specific word er index
console.log(text.toUpperCase()); // upper case
console.log(text.toLowerCase()); // lower case

let text1 = 'My name is ';
let text2 = 'Adnan';
console.log(text1.concat(text2)); // text1 er poro text2 join korbe

let sliced = text.slice(0,12); // text er 0 theke 12 index porjonto slice korbe
console.log(sliced);
*/

// Taking input from user
/*
let name = prompt("Enter your name: ");
document.write('Your name is: '+name);
*/


 //Operators in JavaScript
/*

// Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let modulus = a % b;
let exponentiation = a ** b;
console.log('Sum: '+sum);
console.log('Difference: '+difference);
console.log('Product: '+product);
console.log('Quotient: '+quotient);
console.log('Modulus: '+modulus);
console.log('Exponentiation: '+exponentiation);

// Increment and Decrement
a++;
b--;
console.log('Incremented a: '+a);
console.log('Decremented b: '+b);

// Compound Assignment
a += 5; // a = a + 5
b *= 2; // b = b * 2
console.log('Compound Assigned a: '+a);
console.log('Compound Assigned b: '+b);
*/

// Functions 
/*
function greet(name){
    return `Hello! ${name}`;
}
let message = greet('Adnan');
console.log(message);

// IIFE (Immediately Invoked Function Expression)
(function(name){
    console.log(`Welcome, ${name}`);
})('Adnan');

// Arrow Function
const add = (a, b) => {
    return a + b;
}
let result = add(10, 5);
console.log(`Sum: ${result}`);

// Default Parameters
function multiply(a, b=2){
    return a * b;
}  
let product = multiply(5);
console.log(`Product: ${product}`);
*/

// Array
/*
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits); // full array print korbe
console.log(fruits[0]); // 0 index er element print korbe
console.log(`Length of fruits array: ${fruits.length}`); // array er length print korbe
fruits.push('Mango'); // array er last e notun element add korbe
fruits.push('Grapes');
console.log(fruits);
fruits.pop(); // array er last element remove korbe
console.log(fruits);
fruits.shift(); // array er first theke element remove krbe
console.log(fruits);
fruits.unshift('Pineapple'); // array er first e notun element add korbe
console.log(fruits);

//splice method // splice(startIndex, deleteCount, item1, item2, ...)
fruits.splice(1,1,'Papaya', 'Watermelon'); // 1 index theke 1 ta element remove kore tar jaygay notun 2 ta element add korbe
console.log(fruits);
fruits.splice(2,2); // index 2 theke 2 ta element remove krbe
console.log(fruits); 

// Combining two arrays
let list1 = ['A', 'B', 'C'];
let list2 = ['D', 'E', 'F'];
let combinedList = list1.concat(list2); // dui ta array ke combine korbe
console.log(combinedList);

// Slicing an array
let slicedFruits = fruits.slice(1,3); // index 1 theke 3 er ag porjonto slice korbe
console.log(slicedFruits);

// Looping through an array
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// Sorting an array
fruits.sort(); // array ke alphabetical order e sort korbe
console.log(fruits);
fruits.reverse(); // array ke reverse order e sort korbe
console.log(fruits);

let number = [40, 100, 1, 5, 25, 10];
number.sort(function(a, b){return a-b}); // number array ke ascending order e sort korbe
console.log(number);

// 2D Array
let playersInfo = [
    ['Adnan', 23 , 'CSE'],
    ['Sakib', 25 , 'EEE'],
    ['Rafi', 22 , 'BBA']
    ];
console.log(playersInfo);
console.log(playersInfo[0]); // first row
console.log(playersInfo[1][2]); // second row er third column

*/

// Object
/*
let student = {
    name: 'Adnan',
    age: 23,
    dept: 'CSE',
}
console.log(student);
console.log(student.name);
console.log(student['age']);

student.gpa = 3.81; // notun property add korbe
console.log(student);

// Looping through an object
for(let key in student){
    console.log(`${key}: ${student[key]}`);
}

// Adding a constructor
function Student(name,age,dept,gpa){
    this.name = name;
    this.age = age;
    this.dept = dept;
    this.gpa = gpa;

    this.display = function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Dept: ${this.dept}, GPA: ${this.gpa}`);
    }
}

let student1 = new Student('Sakib', 25, 'EEE', 3.75);
student1.display();

// Math object
console.log(Math.sqrt(16)); 
console.log(Math.pow(2, 3));
console.log(Math.abs(-10));
console.log(Math.sin(Math.PI / 2));
console.log(Math.cos(0));
console.log(Math.floor(4.7));  
console.log(Math.ceil(4.3));
console.log(Math.round(4.5));
console.log(Math.max(10, 20, 5, 15));
console.log(Math.min(10, 20, 5, 15));
console.log(Math.random()); // 0 and 1 er moddhe random number generate korbe

// Date object
let currentDate = new Date();
console.log(currentDate);

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let date = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log(`Current Date and Time: ${date}/${month}/${year} ${hours}:${minutes}:${seconds}`);
*/


// Local Storage
/*
// SetItem(key, value)
localStorage.setItem('username', 'Adnan');
localStorage.setItem('password', '12345');

// GetItem(key)
let UserName = localStorage.getItem('username');
let Password = localStorage.getItem('password');

console.log(`Username: ${UserName}`);
console.log(`Password: ${Password}`);

// RemoveItem(key)
localStorage.removeItem('password');

localStorage.clear(); // sob data remove korbe local storage theke

const countries = ['Bangladesh', 'Saudi Arabia', 'Turkey', 'Malaysia'];
localStorage.setItem('username', 'Adnan');
localStorage.setItem('password', '12345');
localStorage.setItem('countries', JSON.stringify(countries)); // array ke string e convert kore local storage e save korbe

const storedCountries = JSON.parse(localStorage.getItem('countries')) // string ke abar array te convert korbe
console.log(storedCountries);
*/

// Session Storage
/*
// SetItem(key, value)
sessionStorage.setItem('sessionName', 'MorningSession');
sessionStorage.setItem('sessionId', 'MS123');

// GetItem(key)
let sessionId = sessionStorage.getItem('sessionId');
console.log(`Session ID: ${sessionId}`);

// RemoveItem(key)
sessionStorage.removeItem('sessionName'); 

sessionStorage.clear(); // sob data remove korbe session storage theke
*/

// Cookies
// Set a cookie
// document.cookie = 'user=Adnan; expires = Wed, 29 Oct 2025 09:25:00 GMT;';


//  DOM
// let myHeading = document.getElementById('h1')
// myHeading.innerHTML = 'This is updated heading 1';

// let myPara = document.getElementById('para')
// myPara.style.color = 'blue';

// document.getElementsByTagName('h2')[1].innerHTML = 'This is updated heading 2';

// document.getElementsByClassName('para1')[0].innerHTML = 'This is updated paragraph 1';

/// Using querySelector
// document.querySelector('#pid').innerHTML = 'This is updated paragraph using query selector';

// document.querySelector('.pcls').innerHTML = 'This is updated paragraph using query selector class';

// document.querySelector('h3').innerHTML = 'This is updated heading 3 using query selector tag';

// document.querySelector('a').innerHTML = 'How are you?';

// document.querySelector('li a').innerHTML = 'ListItem link updated';

// document.querySelector('.myDiv a').innerHTML = 'MyDiv link updated';

/// Button Click
// function showMessage(){
//     alert('Hello Everyone!');
// }

// function surprise(){
//     let msz = document.querySelector('#salam')
//     msz.innerHTML = 'Assalamu Alaikum!';
// }

// function showImage(){
//     document.querySelector('#imgID').src = 'https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg?semt=ais_hybrid&w=740&q=80';
// }


// Creating Elements
let newHeading = document.createElement('h3');
let text = document.createTextNode('This is a new heading created using createElement and createTextNode');
newHeading.appendChild(text);

let myDiv = document.querySelector('#myDiv');
myDiv.appendChild(newHeading);

// Removing Elements
let H2 = document.querySelector('h2');
myDiv.removeChild(H2);

// Inserting Before an Element
let heading0 = document.createElement('h1');
let text0 = document.createTextNode('Assalamu Alaikum');
heading0.appendChild(text0);

let heading1 = document.querySelector('h1');
myDiv.insertBefore(heading0,heading1);