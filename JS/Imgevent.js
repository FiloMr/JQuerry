$(function (){
    $('#pokaz').on('click', function (){
        $('img').eq(0).show(1500);
    });
    $('#ukryj').on('click', function (){
        $('img').hide(500);
    });
    $('#przelacz').on('click', function (){
        $('img').toggle();
    });
});