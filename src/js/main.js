// slider banner

let slideIndex = 0;
const slides = document.getElementsByClassName('mySlides');
const dots = document.getElementsByClassName('dot');

const showSlide = () => {
    console.log(slides);

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlide, 5000);
}

showSlide();


//product page img gallery

function currentDiv(n) {
    showDivs(galleryIndex = n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("food-img");
    let dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        galleryIndex = 1
    }
    if (n < 1) {
        galleryIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" food-opacity-off", "");
    }
    x[galleryIndex - 1].style.display = "block";
    dots[galleryIndex - 1].className += " food-opacity-off";
}