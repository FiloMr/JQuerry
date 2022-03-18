$(function (){
    $('input').on('focus',function (){$('#span').css('display','inline').fadeOut(4500);});
    $('input').on('blur',function (){$('#span1').css('display','inline').fadeOut(4500);});
    $('input').on('change   ',function (){$('#span2').css('display','inline').fadeOut(4500);});
});
$(function (){
   let i =0;
   let n=0;
   $('#wew').mouseover(function (){
       i +=1;
       $('#komm').text('Najechano na prostokat '+i+' razy');
   }).mouseout(function () {
       $('#komm').text('Opuszczono obszar prostokata');
   });
   $('#wew').click(function () {
       n += 1;
       $('#komm').text('Kliknieto prostokat '+n+' Razy');
   });
});
$(function (){
$('input').on('keydown keyup keypress',function (){
    $('span').eq(4).text(''+ event.type);
});
$('input').on('keydown  keypress',function (){
    $('span').eq(5).text(''+ event.which);
});

$('h2').on('click dbclick mouseover mouseout',function (){
    $('span').eq(4).text(''+event.type)
    const target = $(event.target);
    if (target.is('h2')) $('span').eq(1).text('Nie dotyczy');
});

$('input , h2').on('click', function (){
    $('span').eq(6).text(event.target.nodeName);
});
});
$(function (){
    $('h1,h2,p,span,button').on('mouseover',function() {
        $('p').last().text(' '+event.target.nodeName);
    });
});

