$(".popup").hide();
$(".matw").hide();
$(".links").hide();
// toggles welcome-window on and off
$(".exit-button").click(function(){
    $("#div5").fadeOut(30);
});
$(".icon-container2").click(function(){
    $("#div5").fadeToggle(30);
    playClickSound1();
});
// toggles my computer window on and off
$("#div14").hide()
$(".x").click(function() {
    $("#div14").fadeOut(30);
})
$("#div1").dblclick(function() {
    $("#div14").fadeToggle(30);
    playClickSound1();
})
// toggles notepad window on and off
$(".note-window").hide();
$("#div2").dblclick(function() {
    $(".note-window").fadeToggle(30);
    playClickSound1();
})
$(".x2").click(function() {
    $(".note-window").fadeToggle(30);
});
$(".icon-container1").click(function() {
    playClickSound3();
});
// toggles matw on and off
$(".x3").click( function() {
    $(".matw").fadeOut(30);
})
$(".two").click(function() {
    $(".matw").fadeToggle(30);
});
// toggles links on and off
$(".five").click(function() {
    $(".links").fadeToggle(30);
})
$(".x4").click(function() {
    $(".links").fadeOut(30);
});
$("#div4").dblclick(function() {
    $(".links").fadeToggle(30);
    playClickSound1();
});
// draggable
$( function() {
    $("#div5").draggable();
} );
$( function() {
    $("#div14").draggable();
} );
$( function() {
    $(".note-window").draggable();
} );
$( function() {
    $(".matw").draggable();
} );
$( function() {
    $(".links").draggable();
} );
// fun
$("#div101").click(function() {
    playClickSound2();
    setTimeout(function() {
        alert("The sky");
    }, 500);
});
// stackable
(function() {
    var highest = 1;

    $.fn.bringToTop = function() {
        this.css('z-index', ++highest); // increase highest by 1 and set the style
    };
})();
$(".window").mousedown(function() {
    $(this).bringToTop();
});
// clicky sound
function playClickSound1() {
    var clickSound = new Audio('Free UI Click Sound Effects Pack/AUDIO/Button/SFX_UI_Button_Mouse_Thick_Generic_1.wav');
    clickSound.play();
}
function playClickSound2() {
    var clickSound2 = new Audio('Free UI Click Sound Effects Pack/AUDIO/Button/SFX_UI_Button_Mouse_Thick_Generic_2.wav');
    clickSound2.play();
}
function playClickSound3() {
    var clickSound3 = new Audio('Free UI Click Sound Effects Pack/mixkit-fast-double-click-on-mouse-275.wav');
    clickSound3.play();
}
// .pressed
$(".buttons").click(function() {
    playClickSound2();
    $(this).addClass("pressed");
    var button = $(this);
    setTimeout(function() {
        button.removeClass("pressed");
    }, 200);
})
$(".icon-container1").click(function() {
    $(this).toggleClass("pressed");
    $(".popup").fadeToggle(30);
});
$(".notbuttons").click(function() {
    playClickSound2();
    $(this).addClass("pressed");
    var button = $(this);
    setTimeout(function() {
        button.removeClass("pressed");
    }, 200);
})

