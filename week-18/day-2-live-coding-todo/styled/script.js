var todoList = document.getElementById("todo-list");
var inputField = document.getElementById("input-field");
var addTodoButton = document.getElementById("add-todo");

const addItemToList = function (event) {
  var newTodoItem = inputField.value;
  //   todoList.innerHTML += `<li>${newTodoItem} <button>X</button></li> `;

  //

  //   create a button
  var removeButtom = document.createElement("button");
  removeButtom.innerText = "Done";
  //   event listener for remove button
  removeButtom.addEventListener("click", function (e) {
    newLiTag.remove();
    // e.target.parentElement.remove();
  });
  // create a new li tag
  var newLiTag = document.createElement("li");
  newLiTag.innerText = newTodoItem;

  // Put button inside li tag
  newLiTag.appendChild(removeButtom);
  // put li tag inside todoList
  todoList.appendChild(newLiTag);
};

addTodoButton.addEventListener("click", addItemToList);
