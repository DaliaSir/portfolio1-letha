const countNumber = document.querySelector(".clicks");
const countButton = document.querySelector(".countButton");

let clicks = 0;

countButton.onclick = count;

function count() {
  clicks ++;
  countNumber.innerHTML = clicks;
}