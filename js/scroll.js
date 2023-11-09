$(window).scroll(function () {
    var currentScrollTop = $(this).scrollTop();


    console.log(currentScrollTop);
    //sun img 스크롤하면 따라옴
    if (3200 < currentScrollTop && currentScrollTop < 5800) {
        $('.sun').css({ left: `${currentScrollTop - 3200}px`, opacity: 1 });
    } else if (currentScrollTop < 3200) {
        $('.sun').css({ left: `-300px`, opacity: 1 });
    } else if (5800 < currentScrollTop) {
        $('.sun').css({ opacity: 0 })
    }
});