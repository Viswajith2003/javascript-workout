// closure
function outer() {
  let count = 0;

  return function inner() {
    // count = 100;          //only inner function can access the count(data privacy)
    count++;
    return count;
  };

  inner();
}
let fn = outer();
console.log(fn());
console.log(fn());



