$(document).ready(function () {

  $("#form").submit(function (e) {
    e.preventDefault();

    const a = $("#left").val();
    const b = $("#right").val();
    const op = $("#op").val();

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

});