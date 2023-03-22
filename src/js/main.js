"use strict";
const slider = document.getElementsByClassName("gallery");
const gallery_buttons = document.querySelectorAll(".gallery_control");

for (let item of gallery_buttons) {
    item.addEventListener("click", (event) => {
        console.log(event.target);
        const currentType = event.target.dataset.type;
        console.log(currentType);

        const currentDirection = event.target.dataset.direction;
        console.log(currentDirection);

        const usedGalley = document.querySelector(`.gallery__${currentType}`).firstElementChild;

        const slideWidth = usedGalley.clientWidth;
        // let slideWidth = Math.floor(usedGalley.scrollLeft / sliderChild[0].clientWidth + 1);
        if (currentDirection == "prev") {
            usedGalley.scrollBy(-slideWidth, 0);
        } else if (currentDirection == "next") {
            usedGalley.scrollBy(slideWidth, 0);
        } else console.log("Unknown direction: " + currentDirection);
    });
}