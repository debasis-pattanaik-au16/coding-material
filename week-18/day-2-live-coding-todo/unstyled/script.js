var todoList = document.getElementById('todo-list')
var addTodoButton = document.getElementById('add-todo')
var inputField = document.getElementById('input-field')

function removeItem(e){
    e.target.parentElement.remove()
}

function addItemToList(event){
    var inputText = inputField.value
    // var todoListHTML = todoList.innerHTML
    // // console.log(todoListHTML)
    // var newTodoListHTML = todoListHTML + '<li>'+ inputText +'<button>X</button></li>'
    // // var newTodoListHTML = `${todoListHTML}<li>${inputText}</li>`
    // // console.log(newTodoListHTML);
    // todoList.innerHTML = newTodoListHTML

    //creating remove button
    var removeButton = document.createElement('button')
    removeButton.innerText = "X"

    removeButton.addEventListener('click', removeItem)

    //creating new li tag
    var newLiTag = document.createElement('li')
    newLiTag.innerText = inputText
    
    //appending remove button element to the <li> that was created right now
    newLiTag.appendChild(removeButton)

    //appending the new <li> with the button in it to the todo list
    todoList.appendChild(newLiTag)

    // console.log(newLiTag);
}

addTodoButton.addEventListener('click', addItemToList)