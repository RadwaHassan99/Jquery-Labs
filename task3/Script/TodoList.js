$(function(){
    $("#addTask").on('click',function(){
        $("#list").append(`<div class='rows'>
        <p class='tasks'> ` + $('#taskName').val() + `</p>
        <button class='Complete'>✓</button> <button class='Remove'>x</button>
       </div>`);
    })

    $("#list").on('click','.Complete',{},function(){   
            $(this).parent().css( "background-color", "rgb(117, 245, 100)" );
    })

    $("#list").on('click','.Remove',{},function(){   
        $(this).parent().remove();
})
    
})



  



    





