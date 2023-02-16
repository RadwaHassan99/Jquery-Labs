$(function(){
    $('#slides>li:gt(0)').hide();
     setInterval(function() {
        $('#slides > li:first')
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo('#slides');
      }, 2000);

/********************************************************************************************************************* */   
$(".slide1").on("click",function(){
    $("#slideCont1").slideToggle(1000);
})

$(".slide2").on("click",function(){
    $("#slideCont2").slideToggle(1000);
})
$(".slide3").on("click",function(){
    $("#slideCont3").slideToggle(1000);
})
});   
   



 
      