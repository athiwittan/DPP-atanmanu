function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

$(function () {
  $("#btn").on("click", function () {
    $("body").css("background-color", randomColor());
  });
});