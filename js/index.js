// (function(){

//     var carousel = document.getElementById('carousel');
//     // let logo = document.getElementsByClassName('background-logo')[0];
    
//     var mainMenu = document.getElementsByClassName('main-menu')[0];
   

//     function setTranslate(xPos, yPos, el) {
//         el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
//     }

//     window.addEventListener("DOMContentLoaded", scrollLoop, false);
 
//     var xScrollPosition;
//     var yScrollPosition;
 
//     function scrollLoop() {
//         xScrollPosition = window.scrollX;
//         yScrollPosition = window.scrollY;
//         setTranslate(0, yScrollPosition * -.425, carousel);
//         setTranslate(0, yScrollPosition * -.26, mainMenu);
//         // setTranslate(0, yScrollPosition * .25, logo);
        
       
//        if(yScrollPosition > 1) {
//            $('.top-header').addClass('scrolled');
//        } else {
//             $('.top-header').removeClass('scrolled');
//        }
//         requestAnimationFrame(scrollLoop);
//     }

    
// }());

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();


    $('#carousel').css({
        'transform' : 'translate(0px, '+ wScroll *-.425 +'px)'
    });
    
    $('.main-menu').css({
        'transform' : 'translate(0px, '+ wScroll *-.26 +'px)'
    });



    if(wScroll > 1) {
        $('.top-header').addClass('scrolled');
    } else {
        $('.top-header').removeClass('scrolled');
    }
    
  
    
  });