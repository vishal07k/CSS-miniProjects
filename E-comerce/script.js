const right = document.querySelector('.right');
const left = document.querySelector('.left');
const slider = document.querySelector('.slider'); 
const images = document.querySelectorAll('.image');

let slideNumber = 1;
let length1 = images.length;

const nextSlide = () =>{
    slider.style.transform = `translateX(-${slideNumber*1100}px)`;
    slideNumber++;
}

const getFirstSlide = () =>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const prevSlide = () =>{
    slider.style.transform = `translateX(-${(slideNumber-2)*1100}px)`;
    slideNumber--;
}

const getLastSlide = () =>{
    slider.style.transform = `translateX(-${(length1-1)*1100}px)`;
    slideNumber = length1;
}

// right.addEventListener("click",()=>{
//     slideNumber < length1 ? nextSlide() : getFirstSlide();
// });

// left.addEventListener('click', ()=>{
//     slideNumber > 1 ? prevSlide() : getLastSlide();
// });

let id = setInterval(() => {
    slideNumber < length1 ? nextSlide() : getFirstSlide();
}, 6000);

