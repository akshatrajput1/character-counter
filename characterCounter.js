let input = document.querySelector("#username");
let span = document.querySelector("#count");

input.addEventListener("input", () => {
  let remaining = 20 - input.value.length;
  span.textContent = remaining;
  if (remaining > 0) {
  span.style.color = "black";
} else {
  span.style.color = "red";
}
});

