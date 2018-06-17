function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i,
        slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("demo"),
        captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Repositions next/prev arrows to maintain center v-alignment
function repositionArrows() {
    var gallery = document.getElementById('gallery')
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var h = gallery.offsetHeight;
    console.log(h);
    console.log(h/2);
    prev.style.marginTop = (h / 2 - 26) + "px";
    next.style.marginTop = (h / 2 - 26) + "px";
}

// Enable/Disable Scrolling Outside of Modal
function disableScrolling() {
    var x = window.scrollX,
        y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y);
    };
}

function enableScrolling() {
    window.onscroll = function () {};
}
