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

var movieMainImage = document.querySelector("main")

if(document.getElementById("kof97")) {
    movieMainImage.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)100%),url(../img/capa/Kof/kof97.jpg)';
    document.body.style.backgroundSize = 'cover' 

}else if(document.getElementById("kof2003")){
    movieMainImage.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)100%),url(../img/capa/Kof/capakof2003.gif)';
    document.body.style.backgroundSize = 'cover'
}else if(document.getElementById("garou")){
    movieMainImage.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)100%),url(../img/capa/Ffury/garou_capa.gif)';
    document.body.style.backgroundSize = 'cover'
}else if(document.getElementById("realB")){
    movieMainImage.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)100%),url(../img/capa/Ffury/real_capa.gif)';
    document.body.style.backgroundSize = 'cover'
}else if(document.getElementById("lastB2")){
    movieMainImage.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)100%),url(../img/capa/LastBlade/lastblade2.gif)';
    document.body.style.backgroundSize = 'cover'
}


// document.addEventListener("DOMContentLoaded", function() {
//     var carouselImages = document.querySelectorAll('.carousel-movie .item img');
//     carouselImages.forEach(function(image) {
//         image.addEventListener('click', function() {
//             // Altera a imagem de fundo do elemento com a classe movie-main
//             var movieMain = document.querySelector('.movie-main');
//             movieMain.style.backgroundImage = 'url(' + this.src + ')';
//         });
//     });
// });
