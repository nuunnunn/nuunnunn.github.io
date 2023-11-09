$(function () { // wait for document ready

    var controller = new ScrollMagic.Controller();

    var horizontalSlide = new TimelineMax()
        // animate panels
        .to("#js-slideContainer", 2, { y: "-100%" })
        .to("#js-slideContainer", 2, { x: "-100%" })
        .to("#js-slideContainer", 2, { x: "-200%" })
        .to("#js-slideContainer", 2, { y: "0%" })

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "onLeave",
        duration: "800%"
    })
        .setPin("#js-wrapper")
        .setTween(horizontalSlide)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});