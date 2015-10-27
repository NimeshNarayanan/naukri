$(document).ready(function() {


  // $(".jobs > li").on("click", function() {
  //   $('.modal').addClass("active");
  // })

  $(".jobs h2 a").on("click", function(e) {
    e.preventDefault();
    h = $(this).attr("href");
    $( "#jobDetails" ).load(h);
    $('.modal').addClass("active");

    $('.modal .popup').animate({
        height: 300
      }, {
        duration: 5000,
        easing: "easeout"
      }
    );

  })


  $('.modal .mask').on("click", function(){
    $(".modal").removeClass("active");
  })


})
