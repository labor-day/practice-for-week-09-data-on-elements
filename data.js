// Your code here
/*
Create an event listener for the #add button to add items to the list.

Display the items in the #shopping-list <ul> element.

Set the data-type attribute of each <li> element with the
value of the type field.

For each type, style the <li> a different background color
in index.css. Recall that CSS supports attribute selectors
using square brackets.
*/

window.addEventListener("DOMContentLoaded", event => {

  let button = document.getElementById("add");

  button.addEventListener("click", event => {
    event.preventDefault();
    let list = document.getElementById("shopping-list")
    let name = document.getElementById("name").value;
    let item = document.createElement("li");
    let selected = document.querySelector("select").value;
    item.innerText = name;
    item.setAttribute("data-type", selected);
    list.append(item);
    console.log(item);
  });


});
