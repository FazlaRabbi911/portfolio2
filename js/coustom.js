
$(document).ready(function(){
        
    $("#colorful").colorfulTab();    
    
    $("#colorful-elliptic").colorfulTab({
        theme: "elliptic"
    }); 
   
   $("#colorful-flatline").colorfulTab({
        theme: "flatline"
    });    
    
    

});


$('.counter').counterUp({
    delay: 10,
    time: 2500
});



// $('.news_silk').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed:500,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     arrows:false,

//   });
//   news_silk responsive

$('.news_silk').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:500,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575.98,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:500,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
//   news_silk responsive




//   back_to_top///////////////////
$(window).scroll(function(){
    var scrolling =$(this).scrollTop()
    if(scrolling > 30){
        $(".back_to_top").fadeIn(500)
    }else{
        $(".back_to_top").fadeOut(500)
    }
})


$(".back_to_top").click(function(){
    $('html, body').animate({
        scrollTop:0
    }, 2000)
})
//   back_to_top///////////////////