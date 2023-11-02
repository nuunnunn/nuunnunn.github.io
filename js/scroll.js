

var tyInt;

$(window).scroll(function () {
  var currentScrollTop = $(this).scrollTop();
  
  //main
  if(0< currentScrollTop && currentScrollTop < 99){
    $('.sec1').children('.content').stop().fadeIn()
  }else if(currentScrollTop>100){
    $('.sec1').children('.content').stop().fadeOut()
  }

  if(500< currentScrollTop){
    if (typingBool == false) { // 타이핑이 진행되지 않았다면 
        typingBool = true;
        tyInt = setInterval(typing, 80); // 반복동작 
    }
  }
});


//글자 타이핑
var typingBool = false;
var typingIdx = 0;
var pIndex = 0;
var pLength = $(".myInfo_hidden > p").length;

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

