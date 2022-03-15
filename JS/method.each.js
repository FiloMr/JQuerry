$('div').each(function (bot){
    console.log(`numer diva o nazwie:  ${this.id} to ${bot}`); //bot zawsze zawiera numer koljnego wywołania funkcji
})
$('button').eq(1).click(function (){
    $('a').each(function (){alert($(this).text())})
});