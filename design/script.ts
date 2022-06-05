const element = <HTMLDivElement>document.getElementById("rect");

let input = <HTMLInputElement>document.querySelector(".input");

const labels = {
    color: <HTMLParagraphElement>document.querySelector("[labels='color']"),
    dimensions: <HTMLParagraphElement>document.querySelector("[labels='dimensions']"),
    radius: <HTMLParagraphElement>document.querySelector("[labels='radius']"),

    update: {
        dimensions: () => {
            labels.dimensions.innerHTML = element.clientWidth + "px" + " x " + element.clientHeight + "px";
        },
        radius: () => {
            labels.radius.innerText = input.value + "px";
        }
    },
}

// TODO: Better function and lateral control

const design = {
    color: {
        random: () => {
            let color = Math.random().toString(16).substring(2, 8);
            color = "#" + color;
            labels.color.innerHTML = color;
            element.style.backgroundColor = color;
        }
    },
    radius: () => {
        element.style.borderRadius = input.value + "px";
    }
}



const output = {
    borderRadius: document.getElementById("output-borderRadius"),
    dimensions: document.getElementById("output-dimensions"),
}

let result = document.querySelector(".result");

input.addEventListener("input", function () {
    labels.update.radius();
    design.radius();
});

new ResizeObserver(labels.update.dimensions).observe(element);

let btn = document.querySelector(".btn")