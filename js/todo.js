const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY ="todos";
let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}



function deleteToDo(event){
    
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); 
    saveToDos();
}


function paintToDo(newTodoObj){

    const toDoPaint = document.createElement("li");
    toDoPaint.id = newTodoObj.id;
    const toDoSpan = document.createElement("span");
    toDoSpan.innerText = newTodoObj.text;
    const toDoButton = document.createElement("button");
    toDoButton.innerText = "❌";  
    
    toDoPaint.appendChild(toDoSpan);
    toDoPaint.appendChild(toDoButton);
    toDoList.appendChild(toDoPaint);

    toDoButton.addEventListener("click",deleteToDo);
}

function handleToDoSubmit(event){

    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos()
}



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

    parsedToDos.forEach(paintToDo);
} 

toDoForm.addEventListener("submit", handleToDoSubmit);