$(function () {
  const $balloon = $("#balloon");
  const colors = ["red", "green", "blue"];

  let size = 200;
  let colorIndex = 0;

  function update() {
    $balloon.css({
      width: size + "px",
      height: size + "px",
      "background-color": colors[colorIndex]
    });
  }

  $balloon.on("click", function () {
    size += 10;
    colorIndex = (colorIndex + 1) % 3;
    if (size > 420) {
      size = 200;
      colorIndex = 0;
    }
    update();
  });

  $balloon.on("mouseleave", function () {
    if (size > 200) {
      size -= 5;
    }
    colorIndex = (colorIndex + 2) % 3;
    update();
  });
});