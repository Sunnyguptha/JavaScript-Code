//====spread operator

let arr=[1,2,3];
//console.log(...arr);

//====Merging Array==

let  oArray=[1,2,3,4];
let cArray=[...oArray];
//console.log(cArray);


const orginalFruits=['apple','banana'];
const copyFruits=[...orginalFruits];
//console.log(copyFruits);

//=====merging array==

const fItem=['apple','banana','cherry'];
const moreFruits=['grapes','orange'];

const allFruits=[...fItem, ...moreFruits];
//console.log(allFruits);


//=====passing multiple argument to a function==

let number=[1,2,3,4];
sum(...number);
function sum(a,b,c,d)
{
          //console.log(a+b+c+d);
}


const friendName=['ganesh','ashoke','ajay'];
retrive(...friendName);
function retrive(a,b,c){

          console.log(a,b,c);
}


//======method===




