let media = window.matchMedia('(max-width: 480px)');
if (media.matches){
    $(document).ready(function () {
        $('.popular-slider').bxSlider({
            pagerCustom: '.slider-nav',
            infiniteLoop: false,
            hideControlOnEnd: true,
            nextSelector: '.popular-arrows-small>.arrow-right',
            prevSelector: '.popular-arrows-small>.arrow-left',
            slideWidth: 350,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 30,
            moveSlides: 1,
        });
        $('.special-slider').bxSlider({
            pagerCustom: '.slider-nav',
            infiniteLoop: false,
            hideControlOnEnd: true,
            nextSelector: '.special-arrows-small>.arrow-right',
            prevSelector: '.special-arrows-small>.arrow-left',
            slideWidth: 350,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 30,
            moveSlides: 1,
        });
        $('.review-slider').bxSlider({
            pagerCustom: '.slider-nav',
            infiniteLoop: false,
            hideControlOnEnd: true,
            nextSelector: '.review-arrows-small>.arrow-right',
            prevSelector: '.review-arrows-small>.arrow-left',
            slideWidth: 350,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 30,
            moveSlides: 1,
        });
        $(document).ready(function () {
            $('.plans-slider').bxSlider({
                pagerCustom: '.slider-nav',
                infiniteLoop: false,
                hideControlOnEnd: true,
                nextSelector: '.plans-arrows-small>.arrow-right',
                prevSelector: '.plans-arrows-small>.arrow-left',
                slideWidth: 350,
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 30,
                moveSlides: 1,
            });
        });
        
    });
}


$(document).ready(function () {
    $('.popular-slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
        nextSelector: '.popular-arrows>.arrow-right',
        prevSelector: '.popular-arrows>.arrow-left',
        slideWidth: 1000,
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 60,
        moveSlides: 1,
    });
});

$(document).ready(function () {
    $('.special-slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
        nextSelector: '.special-arrows>.arrow-right',
        prevSelector: '.special-arrows>.arrow-left',
        slideWidth: 1000,
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 60,
        moveSlides: 1,
    });
});

$(document).ready(function () {
    $('.review-slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
        nextSelector: '.review-arrows>.arrow-right',
        prevSelector: '.review-arrows>.arrow-left',
        slideWidth: 1000,
        minSlides: 2,
        maxSlides: 2,
        slideMargin: 60,
        moveSlides: 1,
    });
});



navigator.geolocation.getCurrentPosition(function(position){
    let coords = position.coords;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([longitude, latitude]),
        zoom: 10
    })
});
});

let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})




$('.plans1').on('mouseover', function () {
    anime({
        targets: '.plans1',
        duration: 1200,
        translateY: '-100px',
    })
})

$('.plans2').on('mouseover', function () {
    anime({
        targets: '.plans2',
        duration: 1200,
        translateY: '-100px',
    })
})
$('.plans3').on('mouseover', function () {
    anime({
        targets: '.plans3',
        duration: 1200,
        translateY: '-100px',
    })
})



$('.plans1').on('mouseout', function () {
    anime({
        targets: '.plans1',
        duration: 1000,
        translateY: '0',
    })
})

$('.plans2').on('mouseout', function () {
    anime({
        targets: '.plans2',
        duration: 1000,
        translateY: '0',
    })
})

$('.plans3').on('mouseout', function () {
    anime({
        targets: '.plans3',
        duration: 1000,
        translateY: '0',
    })
})




    

let menu = document.querySelector('.menu-small');
let condition = true;
let start = 0;
let end = 0;
function forward() {
    anime({
            targets: '.menu-small',
            translateY: ['-100%', '0'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        });
    condition = false;
    anime({ 
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    anime({
         targets: '.stick',
         rotate: 180,
         easing: 'easeInOutQuad',
         direction: 'alternate',
         duration: 1000,
         loop: false,
         backgroundColor: '#588E61',
    })
}

function backward() {
    anime({
            targets: '.menu-small',
            translateY: ['0', '-100%'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false,
        });
    condition = true;
    anime({
            targets: '.menu_small_icon',
            rotate: 0,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        })
    anime({
            targets: '.stick',
            rotate: 0,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false,
            backgroundColor: '#FFF',
        })

}

$('.menu_small_icon').click(function(){
    if (condition) {
        forward();
    } else {
        backward();
    } 
});

$('.container').on('touchstart', function (event){
    start = event.originalEvent.touches[0].pageX;
})

$('.container').on('touchend', function (event){
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    }
    else if (start - end >= 100 && !condition) {
        backward();
    }
})