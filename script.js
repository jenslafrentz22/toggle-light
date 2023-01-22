const body = document.querySelector("body");
const btn = document.querySelector("button");
let count = 0;
btn.addEventListener("click", function (e) {
  body.classList.toggle("body-dark");
  btn.classList.toggle("btn-dark");
  count++;
  if (count % 2 === 0) {
    document.title = "Good Morning";
  } else {
    document.title = "Good Night";
  }
  console.log(count);
});
