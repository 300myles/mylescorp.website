console.log('Hello World!');
const todoList = [];

function renderTodoList () {
  const inputHtmlElement = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    inputHtmlElement = document.querySelector('.js-todo');
    const html = `<p>${todo}</p>`
    inputHtmlElement.innerHTML = html;
  }
}

function addTodo () {
  
  const inputText = document.querySelector('.js-input');
  const todo = inputText.value;
  todoList.push(todo);
  
  
  console.log (todoList);
  renderTodoList();
  
  inputText.value = '';
}
