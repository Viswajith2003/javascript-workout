// let a=10, b="10";
// console.log(a === b);

// Terinary operators
// let x=5;
// let y=x>=4 ? true: false;
// console.log(y);

// this keyword working
// function printMarkList() {
//     console.log("mark earned by "+this.name +":" +this.mark);
// }

// const student1 = {
//   id: 101,
//   name: "Viswa",
//   age: 22,
//   mark: 80,
//   show: printMarkList,
// };
// const student2 = {
//   id: 102,
//   name: "Viswajith",
//   age: 24,
//   mark: 90,
//   show: printMarkList,
// };
// student1.show()



// Arrow function

// const sum=(a,b)=>{
//     let s=a+b;
//     return s;
// }

// console.log(sum(4,5));



// Template Literals
// let name="viswa";
// let age=22;

// let msg=`My name is ${name} and i'm ${age} years old`;
// console.log(msg);



//Arrays
// let words=["abc","cgs","fae"];
// words.push("viswa")
// words.pop()
// words.unshift('jithu')   add to begining
// words.shift()  remove first item
// words.splice(0,2,"viswa")    //[ 'viswa', 'fae' ]
// console.log(words)
// let s=words.slice(2)  
// console.log(s);


//Array iterations
let words=["abc","cgs","fae"];
let number=[1,2,3];
forEach()
words.forEach((item,index)=>{
    console.log(`${index+1}. ${item}`);
});

//map()
// words.map((item,index)=>{
//     console.log(`${index+1}. ${item}`);
// })

// let w=number.map(num=>num*num);
// console.log(w)

//filter()
// let age=[12,24,4,5,58,75]
// let num=age.filter(age=>age>=18);
// console.log(num);

// // reduce()
// let marks=[10,20.30];
// let total=marks.reduce((sum,mark)=>sum+mark,0);
// console.log(total);


//find()
// let users=[
//     {name:"Viswa",age:22},
//     {name:"Jithu",age:17}
// ];

// let adult=users.find(user=>user.age>=18)
// console.log(adult);


// some(),every()
// let scores=[70,85,40,90];
// console.log(scores.some(score=>score<50));
// console.log(scores.every(score=>score>=50));