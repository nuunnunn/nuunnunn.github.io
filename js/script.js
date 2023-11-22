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


let popOpen = document.querySelectorAll('.seeMore');
let popup = document.querySelector('.pj_infoWrap');
popOpen.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        popup.style.height = '100vh';
        popup.children[i].style.visibility = 'visible';
        if(i === 0 || i === 1 || i === 2){
            popup.style.background = '#b3ceb3';
        }
        else if(i === 3 || i === 4 || i === 5){
            popup.style.background = '#81c0b5';
        }
    })
});

let popClose = document.querySelectorAll('.close');
popClose.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        popup.style.height = '0vh';
        popup.children[i].style.visibility = 'hidden';
    })
});


// let lightSpan = document.querySelector('.lightSpan');
// let light = document.querySelectorAll('.light');
// lightSpan.addEventListener('mouseover',()=>{
//     console.log(light)
//     for(let i in light){
//         light[i].animate({opacity: 0},{duration:500, iterations:1,})
//     }
// });


const imgSlide = ()=>{
    $('.hSlide').children('img').eq(2).css({marginTop:'100px', border: '5px solid #fe6a6a'});
    $('.hSlide').stop().animate({marginLeft: '-365px'},1000,()=>{
        $('.hSlide').children('img').eq(0).appendTo('.hSlide');
        $('.hSlide').css({marginLeft: 0});
    });
    $('.hSlide').children('img').eq(1).css({marginTop:'0px', border: '5px solid #fed4d5'});
}
setInterval(imgSlide,3000);