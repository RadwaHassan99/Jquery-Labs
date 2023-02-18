$( function() {
    $("#effect").hover(function() {
        $(this).effect("shake", { times:5}, 100);
  });
  $("#shaking").draggable(); 


  $("#hole").droppable(
    {
        drop :function()
    {
        $("#shaking").fadeOut("slow");
    }
})
  
    
  });
  