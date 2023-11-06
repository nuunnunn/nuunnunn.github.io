



//글자 타이핑
var typingBool = false;
var typingIdx = 0;
var pIndex = 0;
var pLength = $(".myInfo_hidden > p").length;
var tyInt;

$(window).scroll(function () {
  var currentScrollTop = $(this).scrollTop();
  //main
  if(0< currentScrollTop && currentScrollTop < 99){
    $('.sec1').children('.content').stop().fadeIn()
  }else if(currentScrollTop>100){
    $('.sec1').children('.content').stop().fadeOut()
  }

  //타이핑
  if(500< currentScrollTop && currentScrollTop < 1903){
    if (typingBool == false) { // 타이핑이 진행되지 않았다면 
        typingBool = true;
        tyInt = setInterval(typing, 80); // 반복동작 
    }
    $('.myImg').css({transform: 'translateX(0)', opacity:1});
    $('.myDream').css({transform: 'translateY(0)', opacity:1});
    $('.show_post').css({transform: 'translateX(0)', opacity:1})
  }

  //이미지 스크롤하면 따라옴
  if(2240 < currentScrollTop && currentScrollTop < 4599){
    console.log(currentScrollTop);
    $('.sun').css({left: `${(currentScrollTop - 2240)*1.5}px`, opacity:1});
  }else if(currentScrollTop < 2239){
    $('.sun').css({left: `-300px`, opacity: 1});
  }else if(4600 < currentScrollTop){
    $('.sun').css({opacity:0})
  }
  // else if(2900 < currentScrollTop){
  //   $('.sun').css('left', `${currentScrollTop - 1840}px`);
  // }
});

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".myInfo_hidden > p").eq(pIndex).text();
typingTxt = typingTxt.split(""); // 한글자씩 자른다. 


function typing() {
    // $(".myInfo_visible > p").removeClass("on");
    // $(".myInfo_visible > p").eq(pIndex).addClass("on");
    if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
        $(".myInfo_visible > p").eq(pIndex).append(typingTxt[typingIdx]).css('opacity',1); // 한글자씩 이어준다. 
        typingIdx++;
    } else {
        if (pIndex < pLength - 1) {
            //다음문장으로  가기위해 인덱스를 1증가
            pIndex++;
            //다음문장을 타이핑하기위한 셋팅
            typingIdx = 0;
            typingBool = false;
            typingTxt = $(".myInfo_hidden > p").eq(pIndex).text();

            //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt);
            //타이핑종료

            setTimeout(function () {
                //1초후에 다시 타이핑 반복 시작
                tyInt = setInterval(typing, 80);
            }, 300);
        } else if (pIndex == pLength - 1) {

            //마지막 문장까지 써지면 반복종료
            clearInterval(tyInt);
            // $(".myInfo_visible > p").removeClass("on");
        }
    }
}  

