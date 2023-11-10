$(window).scroll(function () {
    var currentScrollTop = $(this).scrollTop();
    let ticketScale = 1;

    console.log(currentScrollTop);
    //sun img 스크롤하면 따라옴
    if (3200 < currentScrollTop && currentScrollTop < 5800) {
        $('.sun').css({ left: `${currentScrollTop - 3200}px`, opacity: 1 });
    } else if (currentScrollTop < 3200) {
        $('.sun').css({ left: `-300px`, opacity: 1 });
    } else if (5800 < currentScrollTop) {
        $('.sun').css({ opacity: 0 })
    }


    //티켓 스크롤
    if(currentScrollTop < 150){
        $('.leaflet_wrap').hover(function(){
            $(this).css({transform:'scale(1.3)'});
            console.log($(this))
            $('.pj_ticket').css({transform: `translateX(300px)`});
        },function(){
            $(this).css({transform:'scale(1)'});
            $('.pj_ticket').css({transform: `translateX(0px) rotate(-70deg)`});
        });

        $('.pj_ticket').css({transform: 'rotate(-70deg)'});

        // $('.top_ticket').css({position: 'relative'});
        $('.bottom_ticket').css({position: 'relative',transform: `rotate(0deg) scale(1)`, marginLeft:`0px`});
    }
    else if(150 < currentScrollTop && currentScrollTop < 500){
        $('.leaflet_wrap').hover(function(){
            $(this).css({transform:'scale(1)'});
            $('.pj_ticket').css({transform: `translateX(0px)`});
        },function(){
            $(this).css({transform:'scale(1)'});
            $('.pj_ticket').css({transform: `translateX(0px)`});
        });
        
        $('.pj_ticket').css({transform: 'rotate(0)'});

        // $('.top_ticket').css({position: 'fixed',top:`${currentScrollTop}px`});

        $('.bottom_ticket').css({position: 'fixed',top:`${currentScrollTop + 150}px`,transform: `rotate(70deg) scale(${ticketScale + (currentScrollTop*0.0015)})`,
        marginLeft:`${currentScrollTop - 200}px`});

    }else if(500 < currentScrollTop && currentScrollTop < 800){
        $('.bottom_ticket').css({position: 'fixed',top:`${currentScrollTop + 150}px`,transform: `rotate(-10deg) scale(${ticketScale + (currentScrollTop*0.002)})`,
        marginLeft:`-${currentScrollTop - 510}px`});

    }else if(800 < currentScrollTop && currentScrollTop < 1000){
        $('.bottom_ticket').css({position: 'fixed',top:`${currentScrollTop + 200}px`,transform: `rotate(0deg) scale(${ticketScale + (currentScrollTop*0.002)})`,
        marginLeft:`${currentScrollTop - 750}px`});

    }else if(1000 < currentScrollTop){
        $('.bottom_ticket').css({position: 'fixed',top:`1200px`, transform: `rotate(0deg) scale(3)`, marginLeft:`250px`});
    }


    //ticket 구멍 색 변함
    if(currentScrollTop < 750){
        $('.bottom_ticket').find('h6').children('i').css({color:'#02554b'})
    }
    else if(750 < currentScrollTop){
        $('.bottom_ticket').find('h6').children('i').css({color:'#7b9d7c'})
    }
});