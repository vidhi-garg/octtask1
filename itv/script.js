// script.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      addTodo();
  });

  function addTodo() {
      const todoText = input.value.trim();
      if (todoText !== '') {
          const li = document.createElement('li');
          li.textContent = todoText;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', function() {
              todoList.removeChild(li);
          });

          li.appendChild(deleteButton);
          todoList.appendChild(li);
          input.value = '';
      }
  }
});
