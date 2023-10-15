const todoForm = document.querySelector("#todo-form")
const todoFormInput = todoForm.querySelector("input")
const todoFormBtn = todoForm.querySelector("button")

const todoList = document.querySelector("#todo-list")
const todos = []

const setTodoList = () => {
    const todoListItem = localStorage.getItem("todoList")
    if(todoListItem) {
        const parseTodoListItem = JSON.parse(todoListItem)
        parseTodoListItem.map(i => {
            paintTodo(i)
        })
    }
}
const addTodoList = (todo) => {

    const newTodo = todoFormInput.value
    paintTodo(newTodo)
    todos.push(newTodo)
    saveTodoList();
    todoFormInput.value = ''
}

const paintTodo = (todo) => {
    const li = document.createElement("li"); 
    const span = document.createElement("span");
    // const button = document.createElement("button");
    // button.innerText = 'X'
    // button.addEventListener("click", delTodoList)
    li.appendChild(span);
    // li.appendChild(button);
    span.innerText = todo

    todoList.appendChild(li)
    
}

const saveTodoList = () => {
    localStorage.setItem("todoList", JSON.stringify(todos))

}
const delTodoList = (e) => {
    const li = e.target.parentElement;
    li.remove();
    const childNum = e.target.childElementCount;
    todos.splice(childNum, 1)
    saveTodoList();

}
setTimeout(setTodoList, 300)
todoFormBtn.addEventListener("click", addTodoList)