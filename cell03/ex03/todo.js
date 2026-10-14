const list = document.getElementById("ft_list");
const newBtn = document.getElementById("new");

function addTodo(text) {
  const div = document.createElement("div");
  div.textContent = text;

  div.addEventListener("click", function () {
    if (confirm("Do you want to remove this TO DO?")) {
      div.remove();
      saveTodos();
    }
  });

  list.prepend(div);
}

function saveTodos() {
  const items = [];
  for (const div of list.children) {
    items.push(div.textContent);
  }
  const value = encodeURIComponent(JSON.stringify(items));
  document.cookie = "todos=" + value + "; max-age=31536000";
}

function loadTodos() {
  const parts = document.cookie.split("; ");
  for (const part of parts) {
    if (part.startsWith("todos=")) {
      const value = part.substring("todos=".length);
      const items = JSON.parse(decodeURIComponent(value));
      for (let i = items.length - 1; i >= 0; i--) {
        addTodo(items[i]);
      }
    }
  }
}

newBtn.addEventListener("click", function () {
  const text = prompt("New TO DO:");
  if (text !== null && text.trim() !== "") {
    addTodo(text.trim());
    saveTodos();
  }
});

loadTodos();