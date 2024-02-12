
function loading(){
    var tl = gsap.timeline()
tl.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
})
tl.from("#yellow2",{
    top:"100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
},"anim")
tl.to("#load h1",{
    dealy:0.6,
    duration:0.5,
    color:"black"
},"anim")
tl.to("#load",{
    display:"none"
})
}
loading()
var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector(".page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});