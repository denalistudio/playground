const rect = document.getElementById("rect");

let input = document.querySelector(".input");
let result = document.querySelector(".result");

input.addEventListener("input", function () {
    result.innerText = input.value + "px";
    rect.style.borderRadius = input.value + "px";
});

function resizer() {
    document.getElementById("dimensions").innerHTML = rect.clientWidth + "px" + " x " + rect.clientHeight + "px";
}

new ResizeObserver(resizer).observe(rect);