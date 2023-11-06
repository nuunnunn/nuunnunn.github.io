let hamburger = document.querySelector('.hamburger');
let hSpan = hamburger.children;

//햄버거 메뉴 hover width 길어짐
hamburger.addEventListener('mouseover', () => {
    hamburger.classList.add('hover')
});
hamburger.addEventListener('mouseleave', () => {
    hamburger.classList.remove('hover')
});


//햄버거 메뉴 active 하면 모양 바뀜
hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        hSpan[0].style.width = '60%';
    } else {
        hamburger.classList.add('active');
        hSpan[0].style.width = '100%';
    }
});



//포스트잇 click
$('.post').click(function(){
    $(this).siblings().children('img').css({transform:'scale(1)'});
    $(this).siblings().children('p').css({transform:'scale(1)', opacity:0.5});

    $(this).children('img').css({transform:'scale(1.1)'});
    $(this).children('p').css({transform:'scale(1.1)', opacity:1});

    console.log($(this).hasClass('postIt2'))
    if($(this).hasClass('postIt')){
        $('.contact').stop().fadeIn().siblings().hide();
        $('.show_post').css('width','33%')
    }else if($(this).hasClass('postIt2')){
        $('.my_project').stop().fadeIn().siblings().hide();
        $('.show_post').css('width','37%')
    }else{
        $('.hobby').stop().fadeIn().siblings().hide();
    }
});


//section2 button hover
$('.go_pj_btn').hover(function(){
    $('.hiSun').css({transform: 'rotate(-15deg) translateX(0)', opacity:1})
},function(){
    $('.hiSun').css({transform: 'translateX(200px)', opacity:0})
});

//section2 button click
$('.button-container').children('button').click(function(){
    console.log($(this))
    $('body,html').animate({scrollTop:2250})
})