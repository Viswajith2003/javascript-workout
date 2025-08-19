document.getElementById("myList").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    // must be uppercase LI
    console.log("Clicked:", e.target.innerText);
  }
});

// Higher Order funtion

function morning(say){
  say()
}

function hello()
{
  console.log("good morning")
}

morning(hello);