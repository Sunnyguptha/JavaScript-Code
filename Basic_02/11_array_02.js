//=========concat==============

//   Combining and Copying

let arr = [3, 4, 7];
let arr1 = [8, 9, 10];
let copys = arr.concat(arr1);
//console.log(copys);

const copied = [...arr, ...arr1];
//console.log(copied);

//=========sort()===================

let num = [2, 1, 564, 75, 67, 4];
//num.sort();

//descending

num.sort((a, b) => b - a)

//console.log(num);

//=====================find()==========

let array = [1, 2, 3, 4, 5, 6];
let c = array.find((n) => n % 2 === 0);
//console.log(c);


let ar = [1, 2, 3, 4, 5, 6];
const findm = ar.find((n) => n > 4);
//console.log(findm);

//======== find()======;-first number greater than 30)

const ar1 = [1, 2, 3, 4, 5, 6];
let filterMethod = ar1.filter((n) => n > 4);
//console.log(filterMethod);


let filterMethod2 = ar1.filter((n) => n % 2 === 0);
//console.log(filterMethod2);



//======splice()=========

let letters = ['a', 'b', 'c', 'd', 'e'];
// add 1 and 3 at index
letters.splice(2, 0, 1, 2);
//console.log(letters);

// remove 1 and 2

letters.splice(2, 2);
//console.log(letters);

//replace

letters.splice(2, 2, 8, 9);
// console.log(letters);


//==== Map ==========================

let arr2 = [1, 2, 4, 5, 6];

const newArray = array.map((currentValue, index, array) => {
  // return transformed value
});


let mapMethod1 = arr2.map((n) => n * 2)
//console.log(mapMethod1);

let mapMethod2 = arr2.map((n) => n * 3);
//console.log(mapMethod2);

//====ForEach()=======================

array.forEach((currentValue, index, array) => {
  // Your code here
});

//  ex2
let fruits = ["banana", "grapse", "organ", "gova"];
//         fruits.forEach(
//           (fruit)=>
//           console.log(fruit)
//           );

//ex3
let letter2 = [1, 2, 3, 4, 5];
// letter2.forEach(
// (l)=>
// console.log(l)
// );

let arr23 = [34, 5, 7, 8, 1];
let resusdf = arr23.map((n) => n * 2);
// console.log(resusdf);

//===============destructuring ============SYNTAX LET [VARI1,VARI2...]=ARRAY

//ex 1
let fruit1 = ["organ", "grapes", "apple", "mango"];
let [fFruits, sFruits, tFruits, fourFruits] = fruit1;
//        console.log(fFruits);
//        console.log(sFruits);
//        console.log(tFruits);
//        console.log(fourFruits);

//ex 3
let a = 10, b = 20;
[a, b] = [b, a];
// console.log("a="+a);
// console.log("b="+b);

// ex 3

let aNested = ["organ", "grapes", ["apple", "mango"]];
let [fNested, sNested, [tNested, fourNested]] = aNested;

// console.log(fNested);
// console.log(fourNested);

//==================== Array-like Object==========

// EX-1

let arrayList = {
  0: "apple",
  1: "banana",
  2: "cherry",
  3: "mangoes",

  length: 3
};

// console.log(typeof arrayList[0]);
// console.log(arrayList.length);


// EX-2

function showArguments() {

  // console.log(arguments);
  // console.log(arguments[0]);
  // console.log(arguments.length);

}
showArguments("apple", "banana", "organ", 23);


// 1.String 

let str = "hello";
// console.log(str);
// console.log(str.length);
// console.log(str[0]);

// array-like object into an array

let arraylike = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  length: 4
};

let array1 = Array.from(arraylike);
console.log(array1);

// let array2=[...arraylike];
// console.log(array2);






