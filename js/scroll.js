$(window).scroll(function () {
    var currentScrollTop = $(this).scrollTop();
    let ticketScale = 1;

    console.log(currentScrollTop);
    //sun img 스크롤하면 따라옴
    if (3200 < currentScrollTop && currentScrollTop < 5800) {
        $('.sun').css({ left: `${currentScrollTop - 3200}px`, opacity: 1 });
    } 
    else if (5800 < currentScrollTop) {
        $('.sun').css({ opacity: 0 })
    }
    // else if (currentScrollTop < 3200) {
    //     $('.sun').css({ left: `0px`, opacity: 1 });
    // } 


    //티켓 스크롤
    if(currentScrollTop < 150){
        $('.leaflet_wrap').hover(function(){
            $(this).css({transform:'scale(1.3)'});
            console.log($(this))
            $('.pj_ticket').css({transform: `translateX(300px)`});
        },function(){
            $(this).css({transform:'scale(1)'});
            $('.pj_ticket').css({transform: `rotate(-70deg) translateY(200px)`});
        });

        $('.pj_ticket').css({transform: 'rotate(-70deg) translateY(200px)'});

        $('.top_ticket').css({position: 'relative', top:0, transform: `rotate(0deg) scale(1)`, marginLeft:`0px`});
        $('.bottom_ticket').css({position: 'relative', top:0,transform: `rotate(0deg) scale(1)`, marginLeft:`0px`});
    }
    else if(150 < currentScrollTop && currentScrollTop < 500){
        $('.leaflet_wrap').hover(function(){
            $(this).css({transform:'scale(1)'});
            $('.pj_ticket').css({transform: `translateX(0px)`});
        },function(){
            $(this).css({transform:'scale(1)'});
            $('.pj_ticket').css({transform: `translateX(0px)`});
        });
        
        $('.pj_ticket').css({transform: 'rotate(0)', animation: 'none'});

        $('.top_ticket').css({position: 'fixed', top:`${currentScrollTop + 150}px`, 
            transform: `rotate(-180deg) scale(${ticketScale + (currentScrollTop*0.001)})`,
            marginLeft:`${currentScrollTop - 100}px`
        });

        $('.bottom_ticket').css({position: 'fixed',top:`${currentScrollTop + 150}px`, 
            transform: `rotate(50deg) scale(${ticketScale + (currentScrollTop*0.0015)})`,
            marginLeft:`-${currentScrollTop - 150}px`
        });

    }else if(500 < currentScrollTop && currentScrollTop < 800){
        $('.top_ticket').css({position: 'fixed', top:`${currentScrollTop + 150}px`, 
            transform: `rotate(-220deg) scale(${ticketScale + (currentScrollTop*0.001)})`,
            marginLeft:`${currentScrollTop - 100}px`
        });

        $('.bottom_ticket').css({position: 'fixed',top:`${currentScrollTop + 150}px`,
            transform: `rotate(-10deg) scale(${ticketScale + (currentScrollTop*0.002)})`,
            marginLeft:`-${currentScrollTop - 150}px`
        });

    }else if(800 < currentScrollTop && currentScrollTop < 1000){
        $('.top_ticket').css({position: 'fixed', top:`${currentScrollTop + 250}px`, 
            transform: `rotate(-300deg) scale(${ticketScale + (currentScrollTop*0.001)})`,
            marginLeft:`-${currentScrollTop - 800}px`
        });

        $('.bottom_ticket').css({position: 'fixed',top:`${currentScrollTop + 250}px`,transform: `rotate(0deg) scale(${ticketScale + (currentScrollTop*0.002)})`,
        marginLeft:`${currentScrollTop - 800}px`});

    }


    //ticket 구멍 색 변함
    if(currentScrollTop < 750){
        $('.bottom_ticket').find('h6').children('i').css({color:'#02554b'})
    }
    else if(750 < currentScrollTop){
        $('.bottom_ticket').find('h6').children('i').css({color:'#7b9d7c'})
    }
});