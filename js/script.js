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