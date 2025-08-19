// callback, promise, async & await

//callback
// let post = [
//   {
//     id: 101,
//     name: "Viswa",
//   },
//   {
//     id: 102,
//     name: "Jithu",
//   },
// ];

// const getPosts = () => {
//   let list = "";
//   setTimeout(() => {
//     post.forEach((item) => {
//       list += `<li>${item.id}:${item.name} </li> <br>`;
//     });
//     console.log(list);
//     document.getElementById("postlist").innerHTML = list;
//   }, 1000);
// };

// const addPost = (item,callback) => {
//   setTimeout(() => {
//     post.push(item);
//     callback();
//   }, 2000);
// };

// addPost({ id: 103, name: "Amal" },getPosts);
//// getPosts();

//promise

// let p1 = new Promise((resolve, reject) => {
//   reject();
// });

// p1.then(() => {
//   console.log("success");
// }).catch(() => {
//   console.log("Failure");
// });

// promise all
// let p1=new Promise((resolve,reject)=>{
//     resolve("Promise 1")
// })
// let p2=10;
// let p3=Promise.resolve("Promise 3")

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })

// let post = [
//   {
//     id: 101,
//     name: "Viswa",
//   },
//   {
//     id: 102,
//     name: "Jithu",
//   },
// ];

// const getPosts = () => {
//   let list = "";
//   setTimeout(() => {
//     post.forEach((item) => {
//       list += `<li>${item.id}:${item.name} </li> <br>`;
//     });
//     console.log(list);
//     document.getElementById("postlist").innerHTML = list;
//   }, 1000);
// };

// const addPost = (item) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       post.push(item);

//       let err = false;
//       if (err) {
//         reject();
//       } else {
//         resolve();
//       }
//       //   callback();
//     }, 2000);
//   });
// };

// addPost({ id: 103, name: "Amal" })
//   .then(Trigger)  //.then(getPost);
//   .catch(() => {
//     console.log("Error occured");
//   });

// //async and await

// async function Trigger() {
//   await addPost({ id: 104, name: "Arun" });
//   getPosts();
// }

// Event Loop
// console.log("Running 1");
// setTimeout(() => {
//   console.log("Running 2");
// }, 2000);
// console.log("Running 3");

// memoization
// function mutlbyTwo(value)
// {
//   console.log("starting 1");
//   console.log(2*value);
// }

// mutlbyTwo(5);
// mutlbyTwo(5);

// with memoization
let cache = [];

function multiByTwo(num) {
  if (num in cache) {
    console.log(cache[num]);
  } else {
    console.log("starting ");
    cache[num] = 2 * num;
    console.log(cache[num]);
  }
}

multiByTwo(8);
multiByTwo(8);
multiByTwo(16);
