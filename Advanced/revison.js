//spread operator  : Expand all items out of an array

// let mydetails={
//     name:"viswa",
//     age:22,
//     place:"malappuram"
// }

// let org={...mydetails,job:"software engineer"}
// console.log(org);

//Destructuring  : unpack all elements frm array/obj into one variable

// let mydetails={
//     name:"viswa",
//     age:22,
//     place:"malappuram"
// }

// let {name,age,place}=mydetails
// console.log(name);

//rest :Gathering multiple values into single varible as array/obj

// let mydetails={
//     name:"viswa",
//     age:22,
//     place:"malappuram"
// }
// const {name,...rest}=mydetails
// console.log(name);
// console.log(rest);

//closure :inner function can access the variables of outer function

// function closure() {
//   let name = "Viswajith";
//   function child() {
//     console.log(name);
//   }
//   child();
// }
// closure();

//callback function
// function greet(name,callback)
// {
//     console.log(name);
//     callback()
// }

// function sayHello()
// {
//     console.log("Good morning")
// }
// greet("viswa",sayHello)

// promise : it is an obj for handle async code which represent a value is available in future as sucess or failure

// const fetchData = new Promise((resolve, reject) => {
//   let sucess = true;
//   if (sucess) {
//     resolve("Data fetch successfully");
//   } else {
//     reject("Data fetch failed");
//   }
// });

// fetchData
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all() : run all promise and fail , if atleast one fail
// function Fetchuser() {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve("user Data");
//     }, 1000)
//   );
// }
// function FetchPost() {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve("post Data");
//     }, 1000)
//   );
// }
// function FetchComments() {
//   return new Promise((_,reject) =>
//     setTimeout(() => {
//       reject("comment data fetching failed");
//     }, 1000)
//   );
// }

// Promise.all([Fetchuser(), FetchPost(),FetchComments()])
//   .then((res) => {
//     console.log("All data:", res);
//   })
//   .catch((err) => {
//     console.log("data failed,", err);
//   });

//   Promise.race(): Run the first Promise, No matter if fail or success
// Promise.race([FetchComments(),Fetchuser(),FetchPost()])
// .then((res)=>{
//     console.log(res)
// })

//  Promise.any(): Run the first success Promise only.
// Promise.any() not return first success promise,why
// Because promise.any() run until all promises are settled, i.e. all promises are either resolved or rejected.
// If all promises are rejected, then it will return aggregate error.
// If any one promise is resolved, then it will return that resolved promise result.
// If all promises are resolved, then it will return the first resolved promise result.

// Promise.any([FetchComments(),Fetchuser()]).then((res)=>{
//     console.log("All data:", res);
// }).catch((err)=>{
//     console.log("data failed,", err);
// })

//   Promise.allsettled(): Run the all promise, No matter if fail or success.

// Promise.allSettled([Fetchuser(), FetchPost(),FetchComments()]).then((res)=>{
//     console.log("Datas : ",res)
// })

// async & await
// This is the modern way to write async code, its look like synchronous but it works in asynchronous

// async function getData()
// {
//     const res=await fetch("api.com/data");
//     let JsonData=await res.json()
//     console.log(JsonData);
// }

// prototype => Every obj ,there is a hidden property called "__proto__" that is pointing the parent object

// let employee = {
//   accessMail: true,
//   accessAllPc() {
//     return "employee can access all pc";
//   },
// };

// let admin = {
//   accessAdminPanel: true,
// };

// admin.__proto__= employee;
// console.log(admin.accessAllPc());

// constructor: used to create and initilize objects

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// let obj=new Person("Viswa",22);
// console.log(obj.name);

// class
// class Person{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     }
//     sayHello=()=>{
//         console.log("Good morning");
//     }
// }

// const obj=new Person("Viswa",22)
// obj.sayHello()

// shallow copy : it copy first level of ppts in objects, changing a nested property in the copied object will also affect the original.

// let person={
//     name:"Viswa",
//     age:22,
//     address:{
//         city:"chelari"
//     }
// }

// let person2={...person}
// person2.address.city="malappuram"
// console.log(person2.address.city);
// console.log(person.address.city);

//deep copy : it copy all leverl of object and when change the nested ppt of copied object won't effect orginal object.

// let person = {
//   name: "Viswa",
//   age: 22,
//   address: {
//     city: "chelari",
//   },
// };

// let person2 = JSON.parse(JSON.stringify(person));
// person2.address.city = "kochi";
// console.log(person2.address.city); //kochi
// console.log(person.address.city); //chelari
