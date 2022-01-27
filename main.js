const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let images = '';
let bigImage = '';

for (let i = 0; i < items.length; i++) {
    images += `<img src=./${items[i]}>`;

    bigImage += `<div class="main-image">
                    <img class="img-big" src=./${items[i]}>
                    <div class="description">
                        <span class="country">${title[i]}</span>
                        <p class="country-desc">${text[i]}</p>
                    </div>
                </div>`;
}

let thumbs = document.querySelector(".thumbs-images");
thumbs.innerHTML = images;

let big = document.querySelector(".left");
big.innerHTML = bigImage;

let currentSlide = 0;

let imageActive = document.getElementsByClassName("main-image");
imageActive[currentSlide].classList.add('active');