const rect = document.getElementById("rect");

const output = {
    borderRadius: document.getElementById("output-borderRadius"),
    dimensions: document.getElementById("output-dimensions"),
}

let input = document.querySelector(".input");
let result = document.querySelector(".result");

input.addEventListener("input", function () {
    output.borderRadius.innerText = input.value + "px";
    rect.style.borderRadius = input.value + "px";
});

function resizer() {
    output.dimensions.innerHTML = rect.clientWidth + "px" + " x " + rect.clientHeight + "px";
}

new ResizeObserver(resizer).observe(rect);

let hexColor = document.querySelector(".result")
let btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
          let color = Math.random().toString(16).substring(2, 8);
          color = "#" + color;
          hexColor.innerText = color;
          rect.style.backgroundColor = color;
});