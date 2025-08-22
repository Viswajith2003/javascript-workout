//Arrays
// let words=["abc","cgs","fae"];
// words.push("viswa")
// words.pop()
// words.unshift('jithu')   add to begining
// words.shift()  remove first item
// words.splice(0,2,"viswa")    //[ 'viswa', 'fae' ]
// console.log(words)
// let s=words.slice(1)  //return new array from part of old
// console.log(s);

//Array iterations
// let words = ["abc", "cgs", "fae"];
// let number = [1, 2, 3, 4];

// // forEach()
// words.forEach((item, index) => {
//   console.log(`${index + 1}. ${item}`);
// });

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



// workout
// const nums=[1,2,3,4];
// nums.map((num)=>{
//     console.log(num*2);
// })


// const nums=[1,2,3,4,5,6];
// let s=nums.filter(num=>num%2===0)
// console.log(s)


// const nums=[5,7,-3,9,-1]
// console.log(nums.find(num=>num<0))



setInterval(()=>{
    console.log("running");
},5000)