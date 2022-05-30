const element = document.getElementById("rect");

const labels = {
    color: document.querySelector("[labels='color']"),
}

const design = {
    color: {
        random: () => {
            let color = Math.random().toString(16).substring(2, 8);
            color = "#" + color;
            labels.color.innerHTML = color;
            element.style.backgroundColor = color;
        }
    }
}



const output = {
    borderRadius: document.getElementById("output-borderRadius"),
    dimensions: document.getElementById("output-dimensions"),
}

let input = document.querySelector(".input");
let result = document.querySelector(".result");

input.addEventListener("input", function () {
    output.borderRadius.innerText = input.value + "px";
    element.style.borderRadius = input.value + "px";
});

function resizer() {
    output.dimensions.innerHTML = element.clientWidth + "px" + " x " + element.clientHeight + "px";
}

new ResizeObserver(resizer).observe(element);

let hexColor = document.querySelector(".result")
let btn = document.querySelector(".btn")

