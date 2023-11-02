//스크롤 방향
gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ease: "power1", duration: 3});

// const tl = gsap.timeline();
// tl.from(".page3", {xPercent: 100})
//   .from(".page4", {xPercent: 100})
//   .from(".page5", {yPercent: -100});

// ScrollTrigger.create({
// 	animation: tl,
//   trigger: ".g_content",
//   start: "top top", 
//   end: "+=4000",
//   markers: true,
//   pin: true,
// 	scrub: 2
// });



const pages = gsap.utils.toArray(".page");
const pagesAmount = pages.length;
const proxy = document.createElement("div");


const t1 =  gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=" + 100 * pagesAmount + "%",
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      // console.log(self.scroll(), self.start, self.start - self.scroll());
      gsap.set(proxy, { x: self.start - self.scroll() });
      // d[0].update();
    },
    markers: {
      startColor: "white",
      endColor: "white"
    }
  }
});
t1.to(pages, {
  xPercent: -100 * (pagesAmount - 1),
  ease: "none",  
});


// t1.to('.page3', { xPercent: -100, ease: "none",})  
//   .to('.page4', { xPercent: -100, ease: "none",})  
//   .to('.page5', { yPercent: 100, ease: "none",  
// });


// const t =  gsap.to(pages, {
//   xPercent: -100 * (pagesAmount - 1),
//   ease: "none", 
//   scrollTrigger: {
//     trigger: ".container",
//     start: "top top",
//     end: "+=" + 100 * pagesAmount + "%",
//     scrub: 1,
//     pin: true,
//     onUpdate: (self) => {
//       // console.log(self.scroll(), self.start, self.start - self.scroll());
//       gsap.set(proxy, { x: self.start - self.scroll() });
//       // d[0].update();
//     },
//     markers: {
//       startColor: "white",
//       endColor: "white"
//     }
//   }
// });


//스크롤 만큼 이동
$(function(){
  //높이와 너비 구함
  var win_h = $(window).height();
  var win_w = $(window).width();
  
  //각 섹션까지의 너비와 높이 값 속성으로 넣어줌
  $('.page').each(function(index){
    $(this).attr("data-hindex",win_h * index);
  });
  $('.page').each(function(index){
    $(this).attr("data-windex",win_w * index);
  });

  // $('.page').on("mousewheel",function(e){
  //   //속성값 불러옴
  //   var pagePosH = parseInt($(this).attr("data-hindex"));
  //   var pagePosW = parseInt($(this).attr("data-windex"));

  //   if(pagePosH < 963){
  //     // console.log(e.originalEvent.wheelDelta)
  //     // if(e.originalEvent.wheelDelta >=0 ){
  //     //   $("html,body").stop().animate({scrollTop:pagePosH - win_h});
  //     //   return false;

  //     // } else if (e.originalEvent.wheelDelta < 0) {
  //     //   $("html,body").stop().animate({scrollTop:pagePosH + win_h},1000);
  //     //   return false;
  //     // }
  //     $('.section01').children('.content').fadeOut()
  //   }
  // });
});