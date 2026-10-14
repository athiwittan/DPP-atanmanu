const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const a = document.getElementById("left").value;
  const b = document.getElementById("right").value;
  const op = document.getElementById("op").value;

  if (!/^[0-9]+$/.test(a) || !/^[0-9]+$/.test(b)) {
    alert("Error :(");
    return;
  }

  const x = Number(a);
  const y = Number(b);

  if ((op === "/" || op === "%") && y === 0) {
    alert("It's over 9000!");
    return;
  }

  let result;
  if (op === "+") result = x + y;
  else if (op === "-") result = x - y;
  else if (op === "*") result = x * y;
  else if (op === "/") result = x / y;
  else if (op === "%") result = x % y;

  alert(result);
  console.log(result);
});

setInterval(function () {
  alert("Please, use me...");
}, 30000);