function uniqueId() {
  let number = Math.ceil(Math.random() * 10000);
  return number.toString();
}

let addButton = document.getElementById('button');
let listInput = document.getElementById('input');
let listContainer = document.getElementById('list-container');


let todo;
let localData = JSON.parse(localStorage.getItem("todo"));
let todoList = localData || [];

addButton.addEventListener('click',(e)=>{
  e.preventDefault();
  todo = listInput.value
  if(todo.length>0){
    todoList.push({id: uniqueId(), todo: todo, isCompleted: false});
  }
    localStorage.setItem("todo",JSON.stringify(todoList))
    renderListContainer(todoList);
    listInput.value ="";
})

listContainer.addEventListener('click',(e)=>{
  let key = e.target.dataset.key;
  let toDelete = e.target.dataset.todokey ;
  todoList.map(todo => {
    if(key===todo.id){
      todo.isCompleted = !todo.isCompleted
    }
  })
  todoList = todoList.filter(todo => todo.id != toDelete)
  renderListContainer(todoList);
  localStorage.setItem("todo", JSON.stringify(todoList));

})


function renderListContainer(todoList){
  let item = todoList.map(({id,todo,isCompleted})=>{
    return `<div class ="margin"><div class="flex"><input type ="checkbox" id="item-${id}" class="wishCheck" data-key = ${id} ${isCompleted ? "checked": ""}><label for="item-${id}" class="wishName ${isCompleted ? "checked-todo": ""}" data-key=${id}>${todo}</label></div><img src="icons8-delete-50.png" data-todokey = ${id} class ="cursor"></div>`
  })
  listContainer.innerHTML = item.join("");
}
function renderListContainer(todoList){
  let item = todoList.map(({id,todo,isCompleted})=>{
    return `<div class ="margin"><div class="flex"><input type ="checkbox" id="item-${id}" class="wishCheck" data-key = ${id} ${isCompleted ? "checked": ""}><label for="item-${id}" class="wishName ${isCompleted ? "checked-todo": ""}" data-key=${id}>${todo}</label></div><img src="icons8-delete-50.png" data-todokey = ${id} class ="cursor"></div>`
  })
  listContainer.innerHTML = item.join("");
}


listContainer.addEventListener('click',(e)=>{
  let key = e.target.dataset.key;
  let toDelete = e.target.dataset.todokey ;
  todoList.map(todo => {
    if(key===todo.id){
      todo.isCompleted = !todo.isCompleted
    }
  })
  todoList = todoList.filter(todo => todo.id != toDelete)
  renderListContainer(todoList);
  localStorage.setItem("todo", JSON.stringify(todoList));

})

renderListContainer(todoList);