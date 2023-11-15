//글자 타이핑
var typingBool = false;
var typingIdx = 0;
var pIndex = 0;
var pLength = $(".hidden_info > p").length;
var tyInt;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".hidden_info > p").eq(pIndex).text();
typingTxt = typingTxt.split(""); // 한글자씩 자른다. 


function typing() {
    // $(".myInfo_visible > p").removeClass("on");
    // $(".myInfo_visible > p").eq(pIndex).addClass("on");
    if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
        $(".visible_info > p").eq(pIndex).append(typingTxt[typingIdx]).css('opacity',1); // 한글자씩 이어준다. 
        typingIdx++;
    } else {
        if (pIndex < pLength - 1) {
            //다음문장으로  가기위해 인덱스를 1증가
            pIndex++;
            //다음문장을 타이핑하기위한 셋팅
            typingIdx = 0;
            typingBool = false;
            typingTxt = $(".hidden_info > p").eq(pIndex).text();

            //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt);
            //타이핑종료

            setTimeout(function () {
                //1초후에 다시 타이핑 반복 시작
                tyInt = setInterval(typing, 100);
            }, 300);
        } else if (pIndex == pLength - 1) {
            //마지막 문장까지 써지면 반복종료
            clearInterval(tyInt);
            $('.skill_box').css({opacity:1});
            // $(".myInfo_visible > p").removeClass("on");
        }
    }
}   



$(window).scroll(function () {
    var currentScrollTop = $(this).scrollTop();
    let ticketScale = 1;

    console.log(currentScrollTop);
    //sun img 스크롤하면 따라옴
    if (3200 < currentScrollTop && currentScrollTop < 6700) {
        $('.sun').css({ left: `${currentScrollTop - 3200}px`, opacity: 1 });
    }
    else if (6700 < currentScrollTop) {
        $('.sun').css({ opacity: 0 })
    }
    // else if (currentScrollTop < 3200) {
    //     $('.sun').css({ left: `0px`, opacity: 1 });
    // } 


    //티켓 스크롤
    if (currentScrollTop < 150) {
        $('.leaflet_wrap').hover(function () {
            $(this).css({ transform: 'scale(1.3)' });
            console.log($(this))
            $('.pj_ticket').css({ transform: `translateX(300px)` });
        }, function () {
            $(this).css({ transform: 'scale(1)' });
            $('.pj_ticket').css({ transform: `rotate(-70deg) translateY(200px)` });
        });

        $('.pj_ticket').css({ transform: 'rotate(-70deg) translateY(200px)' });

        $('.top_ticket').css({ position: 'relative', top: 0, transform: `rotate(0deg) scale(1)`, marginLeft: `0px` });
        $('.bottom_ticket').css({ position: 'relative', top: 0, transform: `rotate(0deg) scale(1)`, marginLeft: `0px` });
    }
    else if (150 < currentScrollTop && currentScrollTop < 500) {
        $('.leaflet_wrap').hover(function () {
            $(this).css({ transform: 'scale(1)' });
            $('.pj_ticket').css({ transform: `translateX(0px)` });
        }, function () {
            $(this).css({ transform: 'scale(1)' });
            $('.pj_ticket').css({ transform: `translateX(0px)` });
        });

        $('.pj_ticket').css({ transform: 'rotate(0)', animation: 'none' });

        $('.top_ticket').css({
            position: 'fixed', top: `${currentScrollTop + 150}px`,
            transform: `rotate(-180deg) scale(${ticketScale + (currentScrollTop * 0.001)})`,
            marginLeft: `${currentScrollTop - 100}px`
        });

        $('.bottom_ticket').css({
            position: 'fixed', top: `${currentScrollTop + 150}px`,
            transform: `rotate(50deg) scale(${ticketScale + (currentScrollTop * 0.0015)})`,
            marginLeft: `-${currentScrollTop - 150}px`
        });

    } else if (500 < currentScrollTop && currentScrollTop < 800) {
        $('.top_ticket').css({
            position: 'fixed', top: `${currentScrollTop + 150}px`,
            transform: `rotate(-220deg) scale(${ticketScale + (currentScrollTop * 0.001)})`,
            marginLeft: `${currentScrollTop - 100}px`
        });

        $('.bottom_ticket').css({
            position: 'fixed', top: `${currentScrollTop + 150}px`,
            transform: `rotate(-10deg) scale(${ticketScale + (currentScrollTop * 0.002)})`,
            marginLeft: `-${currentScrollTop - 150}px`
        });

    } else if (800 < currentScrollTop && currentScrollTop < 1000) {
        $('.top_ticket').css({
            position: 'fixed', top: `${currentScrollTop + 250}px`,
            transform: `rotate(-300deg) scale(${ticketScale + (currentScrollTop * 0.001)})`,
            marginLeft: `-${currentScrollTop - 800}px`
        });

        $('.bottom_ticket').css({
            position: 'fixed', top: `${currentScrollTop + 250}px`, transform: `rotate(0deg) scale(${ticketScale + (currentScrollTop * 0.002)})`,
            marginLeft: `${currentScrollTop - 800}px`
        });

    }


    //타이핑
    if(1300 < currentScrollTop && currentScrollTop < 2800){
        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
            typingBool = true;
            tyInt = setInterval(typing, 80); // 반복동작 
        }
    }


    // ticket 구멍 색 변함
    if(currentScrollTop < 750){
        $('.bottom_ticket').find('h6').children('i').css({color:'#02554b'})
    }
    else if(750 < currentScrollTop){
        $('.bottom_ticket').find('h6').children('i').css({color:'#7b9d7c'})
    }

    // 입구 이미지
    if(2900 > currentScrollTop){
        $('.hiSun').stop().fadeIn();
    }else if(2900 < currentScrollTop){
        $('.hiSun').stop().fadeOut();
    }
});