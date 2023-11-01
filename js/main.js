let hamburger = document.querySelector('.hamburger');
let hSpan = hamburger.children;

//햄버거 메뉴 hover width 길어짐
hamburger.addEventListener('mouseover',()=>{
    hamburger.classList.add('hover')
});
hamburger.addEventListener('mouseleave',()=>{
    hamburger.classList.remove('hover')
});


//햄버거 메뉴 active 하면 모양 바뀜
hamburger.addEventListener('click',()=>{
    if(hamburger.classList.contains('active')){
        hamburger.classList.remove('active');
        hSpan[0].style.width = '60%';
    }else{
        hamburger.classList.add('active');
        hSpan[0].style.width = '100%';
    }
});