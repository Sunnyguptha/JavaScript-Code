

let str1="hello";
//console.log(str1); //commonly use in JSON

let str2='hello';
//console.log(str2); //often preferred for consistency in coding


// backtic(template literals)

let name = `alice`;
let message = `hello,${name}`;
//console.log(message);

const name2 = `game`;
const codeId = `234`;
const message2 = `hello code ${name2} code id is ${codeId}`;

//console.log(message2);


// multipe  string

let multiLine=`
This is a 
multiline string
by java`;

//console.log(multiLine);


let fname="suuny";
let repCount=34;

//console.log(`my name is ${fname} and repcount is ${repCount}`)

      //===String Operation
      
    let gitName=new String('guptha sunny kumar');  
    //console.log(gitName);
   // console.log(gitName[0]);
//console.log(gitName.__proto__);

//console.log(gitName.charAt(2));

// console.log(gitName.indexOf('t'));

//console.log(gitName.indexOf('a'));

//console.log(gitName.lastIndexOf('a'));

// console.log(gitName.length);

// console.log(gitName.toUpperCase());
// console.log(gitName.toLowerCase());

let newString=gitName.substring(0,6);
// console.log(newString);
// console.log(gitName);


let aString=gitName.slice(0,4);
//console.log(aString);

let sString=gitName.slice(-3);
// console.log(sString);

// console.log(gitName.split('-'));
// console.log(gitName.split(' '));

//========String Operation====
     
let strs1='hello';
let strs2='world';
let res=strs1+" "+strs2;
//console.log(res);

//==using concat()

let res2=strs1.concat(" ",strs2);
//console.log(res2);

//===Extract a portion of a string

let subString=res.substring(6,11);
//console.log(subString);



//==Retrive the length of a string



//console.log(res.length);




//==convert a string to upercase 
console.log(res.toUpperCase());

//==convert a string to lowercase 

console.log(res.toLowerCase());





