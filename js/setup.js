$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


var tela_kof97 = document.getElementById('kof97')
// var backgroud_kof2002 = document.getElementsByClassName('movie-main')

// if (tela_kof97) {
//     document.body.style.background = 'linear-gradient(rgba(0,0,0,.60),rgba(0,0,0,.60)100%),url(../img/capa/kof97.jpg)'
//     document.body.style.backgroundSize = 'cover'

// } else {
//     document.body.style.background = 'linear-gradient(rgba(0,0,0,.60),rgba(0,0,0,.60)100%),url(../img/capa/Capa2002.jpg)'
//     document.body.style.backgroundSize = 'cover'
// }

// var movieMainImage = document.querySelector(".movie-main")
// var movieMainImageID = document.getElementById("kof97")

// if(movieMainImageID) {
//     movieMainImage.style.backgroundImage = 'url(../img/capa/kof97.jpg)';

// }else{
//     movieMainImage.style.backgroundImage = 'url(../img/capa/Capa2002.jpg)';
// }


document.addEventListener("DOMContentLoaded", function() {
    var carouselImages = document.querySelectorAll('.carousel-movie .item img');
    carouselImages.forEach(function(image) {
        image.addEventListener('click', function() {
            // Altera a imagem de fundo do elemento com a classe movie-main
            var movieMain = document.querySelector('.movie-main');
            movieMain.style.backgroundImage = 'url(' + this.src + ')';
        });
    });
});