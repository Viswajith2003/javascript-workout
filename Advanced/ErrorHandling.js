console.log("started");

const getValue1 = () => {
  console.log("inside getValue1");
  var obj = undefined;
  //   great();
  return obj.value;
};
const getValue2 = () => {
  console.log("inside getValue2");
  return 10;
};
const result = (a, b) => a + b;



let a, b, res;
try {
  console.log("on try");
  a = getValue1();
  b = getValue2();
  res = result(a, b);

}catch (e) {
  console.log("on catch");
  res = 0;
}
console.log(res);
console.log("ended");
