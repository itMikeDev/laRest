let divOne = document.querySelector(".head-container_left");
let divThree = document.querySelector(".head-container_right");
let divTwo = document.querySelector(".head-container_center");

divOne.onmouseenter = () => {
    divOne.style.opacity = "85%";
}

divOne.onmouseleave = () => {
    divOne.style.opacity = "100%";
}


divThree.onmouseenter = () => {
    divThree.style.opacity = "85%";
}

divThree.onmouseleave = () => {
    divThree.style.opacity = "100%";
}