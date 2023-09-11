console.log('Hello World!');
let todoList = [];

function renderTodoList () {
  
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const inputHtmlElement = document.querySelector('.js-todo');
    inputHtmlElement.innerHTML = `<p>${todo}</p>`;
  }
}

function addTodo () {
  
  const inputText = document.querySelector('.js-input');
  let todo = inputText.value;
  todoList.push(todo);
  
  renderTodoList();
  
  console.log (todoList);
  
  inputText.value = '';
  
}
