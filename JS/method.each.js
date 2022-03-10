$('div').each(function (bot){
    console.log(`numer diva o nazwie:  ${this.id} to ${bot}`);
})
$('button').click(function (){
    $('a').each(function (){alert($(this).text())})
});