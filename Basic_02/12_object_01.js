

//Symbol is a primitive data type introduced in ES6.

//Every Symbol is guaranteed to be unique

let a=Symbol("id");
let b=Symbol("id");
console.log(a===b);


let mySym=Symbol("key1");
//console.log(mySym);

let jsUser={


          name:"sunny",
          "full name":"Sunny guptha",
          [mySym]:"mykey1",
          age:18,
          location:"Hyderabad",
          email:"sunnygupta@gmail.com",
          isLoggedIn:false,
          lastLoginDay:["Monday","Saturday"]

}

//console.log( jsUser);

//console.log(jsUser.email); //dot notation
//console.log(jsUser["email"]); //bracket notation 

//console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);

jsUser.email="guptha@gmail.com";
//console.log(jsUser.email);
//Object.freeze(jsUser); //Once frozen, the object becomes immutable — you can’t update or add properties.
//jsUser.email="kumar@gmail.com"
//console.log(jsUser.email);

// method

jsUser.greeting=function(){
          console.log("hello js user");
}
//jsUser.greeting(); 

jsUser.greetingTwo=function(){
         console.log(`hello js user ${this.name} your email is ${this.email}`); 
};

jsUser.greetingTwo();




