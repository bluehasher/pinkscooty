
$(document).ready(function(){
    $('.menu-list-1').hide(1000);
    $('#open-menu').click(function(event){
        $('.menu-list-1').show(1000);
        $('#close-menu').show();
        $(this).hide();
    })
    $('#close-menu').click(function(){
        $('.menu-list-1').hide(1000);
        $('#open-menu').show();
        $('#close-menu').hide();
    })
})