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

/*
let dark = false;
const btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
  dark = !dark; // löscht boolean
  if (dark) {
    document.body.classList.add("body-dark");
    btn.classList.add("btn-dark");
    document.title = "Good Night";
  } else {
    document.body.classList.remove("body-dark");
    btn.classList.remove("btn-dark");
    document.title = "Good Morning";
  }
});
*/
