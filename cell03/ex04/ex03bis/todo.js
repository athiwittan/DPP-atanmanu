$(function () {
  const $list = $("#ft_list");

  function addTodo(text) {
    const $div = $("<div>").text(text);

    $div.on("click", function () {
      if (confirm("Do you want to remove this TO DO?")) {
        $(this).remove();
        saveTodos();
      }
    });

    $list.prepend($div);
  }

  function saveTodos() {
    const items = [];
    $list.children().each(function () {
      items.push($(this).text());
    });
    const value = encodeURIComponent(JSON.stringify(items));
    document.cookie = "todos=" + value + "; max-age=31536000";
  }

  function loadTodos() {
    const parts = document.cookie.split("; ");
    $.each(parts, function (_, part) {
      if (part.startsWith("todos=")) {
        const value = part.substring("todos=".length);
        const items = JSON.parse(decodeURIComponent(value));

        for (let i = items.length - 1; i >= 0; i--) {
          addTodo(items[i]);
        }
      }
    });
  }

  $("#new").on("click", function () {
    const text = prompt("New TO DO:");
    if (text !== null && text.trim() !== "") {
      addTodo(text.trim());
      saveTodos();
    }
  });

  loadTodos();
});