$(document).ready(function () {
    $('.hidden-translation').addClass('show-translation');
    var docHeight = $(window).height();
    var toShow = $('#how-it-works > *');
    toShow.push($("#proven-results"));
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        for (let i = 0; i < toShow.length; i++) {
            if ($(toShow[i]).hasClass('show')) {
                continue;
            }
            var pos = $(toShow[i]).offset().top;
            var activePosition = scroll + docHeight / 3;
            if (i == toShow.length - 2) {
                activePosition = scroll + docHeight / 1.5;
            }
            if (i == toShow.length - 1) {
                activePosition = scroll + docHeight / 1.1;
            }
            if (activePosition > pos) {
                $(toShow[i]).addClass('show');
            }
        }
    });
});

