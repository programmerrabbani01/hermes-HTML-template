
$(document).ready(function () {
    
      $('.sliderbox').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<div id="coderprev" class="slick-prev">
                    <img src="./assets/img/Arrow 2.png" alt="" />
                </div> `,
        nextArrow: `<div id="codernext" class="slick-prev">
                    <img src="./assets/img/Arrow 3.png" alt="" />
                    </div>`,
        pauseOnHover:false,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                centerPadding: '40px',
                slidesToShow: 2
                }
            },
            {
            breakpoint: 480,
            settings: {
                centerPadding: '40px',
                slidesToShow: 1
                }
            }
        ]
      });
    
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false,
         pauseOnHover:false,
    });
    
    
});