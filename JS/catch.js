$(function(){
    //najpierw co zmienic, potem jak zmienic
    $('#page').css('background-color','rgba(212,157,229,0.89)');
    //jak wskazac obiekt przez id

    $('h2').css('letter-spacing','5px');
    //jak wsakazac obiekt przez znacznik

    $('.link').css({'color':'purple','text-decoration': 'none' });
    //jak wskazac obiekt przez klase

    $('[href="#"]').attr('href','https://uonetplus.vulcan.net.pl/powiatcieszynski')
    //jak wskazac obiekt przez wartość wlasnosci (attribute)
});