
//1
display(1,2,3,4,56,9,8);

function display(first,s,t,...resNumber)
{

          // console.log(first);
          // console.log(s);
          // console.log(t);
          // console.log(resNumber);


}

//ex=2


let [f,s,...res]=[12,4,5,65,87,98];
// console.log(f);
// console.log(s);
// console.log(res);

//======Array Destructuring
let numbers=[1,2,3,4,5,6];
let[f1,s1,...rest]=numbers;
// console.log(f1+" "+ s1);
// console.log(" "+ rest)

//===Object Destructuring

let user = {
          name: 'deepak',
          age: 345,
          gender: "male",
          hobies: ["vollyboll", "cricket"],
          tool: "vs code"
        };
        
        let { name, age, ...remaings } = user;
        
        console.log(name);     // Output: deepak
        console.log(age);      // Output: 345
        console.log(remaings); // Output: { gender: "male", hobies: [...], tool: "vs code" }
        
