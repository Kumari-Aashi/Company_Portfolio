const slider = document.querySelector(".slides");

let index = 0;

const total = document.querySelectorAll(".slides video").length;

setInterval(() => {

    index++;

    if(index >= total){
        index = 0;
    }

    slider.style.transform = `translateX(-${index * 320}px)`;

},3000);