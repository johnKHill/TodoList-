$(document).ready(function() {
  // Making a request to my own api
  $.getJSON("/api/todos")
  .then(addTodos)
});

function addTodos(todos) {
  // add todos to the page
  todos.forEach(function(todo) {
    let newTodo = $("<li>"+ todo.name + "</li>");
    newTodo.addClass("task");

    $(".list").append(newTodo);
  })

}