$(".popup").hide();$(".matw").hide();$(".links").hide();$(".exit-button").click(function(){$("#div5").fadeOut(30)});$(".icon-container2").click(function(){$("#div5").fadeToggle(30);playClickSound1()});$("#div14").hide()
$(".x").click(function(){$("#div14").fadeOut(30)})
$("#div1").dblclick(function(){$("#div14").fadeToggle(30);playClickSound1()})
$(".note-window").hide();$("#div2").dblclick(function(){$(".note-window").fadeToggle(30);playClickSound1()})
$(".x2").click(function(){$(".note-window").fadeToggle(30)});$(".icon-container1").click(function(){playClickSound3()});$(".x3").click(function(){$(".matw").fadeOut(30)})
$(".two").click(function(){$(".matw").fadeToggle(30)});$(".five").click(function(){$(".links").fadeToggle(30)})
$(".x4").click(function(){$(".links").fadeOut(30)});$(function(){$("#div5").draggable()});$(function(){$("#div14").draggable()});$(function(){$(".note-window").draggable()});$(function(){$(".matw").draggable()});$(function(){$(".links").draggable()});$("#div101").click(function(){playClickSound2();setTimeout(function(){alert("The sky")},500)});(function(){var highest=1;$.fn.bringToTop=function(){this.css('z-index',++highest)}})();$(".window").mousedown(function(){$(this).bringToTop()});function playClickSound1(){var clickSound=new Audio('AUDIO/Button/SFX_UI_Button_Mouse_Thick_Generic_1.wav');clickSound.play()}
function playClickSound2(){var clickSound2=new Audio('AUDIO/Button/SFX_UI_Button_Mouse_Thick_Generic_2.wav');clickSound2.play()}
function playClickSound3(){var clickSound3=new Audio('mixkit-fast-double-click-on-mouse-275.wav');clickSound3.play()}
$(".buttons").click(function(){playClickSound2();$(this).addClass("pressed");var button=$(this);setTimeout(function(){button.removeClass("pressed")},200)})

$(".icon-container1").click(function(){$(this).toggleClass("pressed");$(".popup").fadeToggle(30)});$(".notbuttons").click(function(){playClickSound2();$(this).addClass("pressed");var button=$(this);setTimeout(function(){button.removeClass("pressed")},200)})
