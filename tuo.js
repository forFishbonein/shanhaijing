$(function() {
    $("#Puzzle1").draggable({ containment: "#wall", scroll: false, });
    $("#Puzzle2").draggable({ containment: "#wall", scroll: false, });
    $("#Puzzle3").draggable({ containment: "#wall", scroll: false, });
    $("#Puzzle4").draggable({ containment: "#wall", scroll: false, });
    $("#Puzzle5").draggable({ containment: "#wall", scroll: false, });
    $("#Puzzle6").draggable({ containment: "#wall", scroll: false, });

    $("#taotie").droppable({
        drop: function(event, ui) {
            $(this).find("img");

        }
    });
});

var touchValue = { x: 5, y: 5, sx: 0, sy: 0, ex: 0, ey: 0 }; //initialize the touch values
window.addEventListener("touchstart", function () {
    console.log("touchstart")
    var event = event || window.event;
    touchValue.sx = event.targetTouches[0].pageX;
    touchValue.sy = event.targetTouches[0].pageY;
    touchValue.ex = touchValue.sx;
    touchValue.ey = touchValue.sy;
});
window.addEventListener("touchmove", function (event) {
    var event = event || window.event;
    event.preventDefault();
    touchValue.ex = event.targetTouches[0].pageX;
    touchValue.ey = event.targetTouches[0].pageY;
    console.log("touchmove")
});
window.addEventListener("touchend", function (event) {
    var event = event || window.event;
    var changeX = touchValue.ex - touchValue.sx;
    var changeY = touchValue.ey - touchValue.sy;
    //console.log("X:"+changeX+" Y:"+changeY);
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    console.log("touchend")
});