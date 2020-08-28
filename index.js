'use strict'

function moveToAbout() {
    $('.linkToAbout').click(function(event) {
        event.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#aboutTitle").offset().top)
    }, 1000);
  });
}

function moveToPortfolio() {
    $('.linkToPortfolio').click(function(event) {
        event.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($(".portfolioTitle").offset().top)
    }, 1200);
  });
}

function moveToContact() {
    $('.linkToContact').click(function(event) {
        event.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#contactWrap").offset().top)
    }, 1200);
  });
}

function scroll() {
    $('.scrollIcon').click(function(event) {
        event.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#aboutTitle").offset().top)
    }, 1000);
  });
}

function scrollNavChange(){
    var scroll_start = 0;
    var startchange = $('#aboutTitle');
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();

            if(scroll_start > offset.top) {
                $('.navbar').toggleClass('navStart', false);
                $('.navbar').toggleClass('navScrolled', true);
                $('.navLink').toggleClass('navLinkStart', false);
                $('.navLink').toggleClass('navLinkScrolled', true);

                $('.active').toggleClass('activeStart', true);
                $('.active').toggleClass('activeScrolled', false);

            } else {
                $('.navbar').toggleClass('navStart', true);
                $('.navbar').toggleClass('navScrolled', false);
                $('.navLink').toggleClass('navLinkStart', true);
                $('.navLink').toggleClass('navLinkScrolled', false);

                $('.active').toggleClass('activeScrolled', true);
                $('.active').toggleClass('activeStart', false);
            }
        });
    }
}

/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/

TweenLite.set("#landingPage", {perspective:600})

var total = 5;
var warp = document.getElementById("landingPage"),  w = window.innerWidth , h = window.innerHeight;

for (var i=0; i<total; i++){
    var Div = document.createElement('div');
    TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm){
    TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
    TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
};

function R(min,max) {return min+Math.random()*(max-min)};


$(function() {
    scroll();
    moveToAbout();
    moveToPortfolio();
    moveToContact();
    scrollNavChange();
}) 