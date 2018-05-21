//на WAYup этот код скрипта качует из проекта в проект у чувака с помощью jQuery сделан но старой версии Jquery. этот скрипт осуществляет ПЛАВНЫЙ ПЕРЕХОД между блоками!

$(document).ready(function() {
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
}); 

//РАССШИФРОВКА СКПИПТА: 1. выбираются все теги <а> с классом scrollto.
