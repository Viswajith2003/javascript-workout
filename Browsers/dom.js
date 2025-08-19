// function clicked() {
//   var name = document.form.screen.value;
//   alert("your name is:" + name);
// }

//create and remove DOM

var heading = document.createElement("h1");
function create() {
  heading.innerHTML = "Welcome to all";
  document.body.appendChild(heading);
}


function remove()
{
  heading.remove();
}
