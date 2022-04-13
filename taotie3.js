$(function() {
    $("#dou").draggable({ containment: "#wall", scroll: false, cursorAt: { top: 25, left: 0 }, revert: "invalid" });
    $("#dou2").draggable({ containment: "#wall", scroll: false, cursorAt: { top: 25, left: 0 }, revert: "invalid" });
    $("#dou3").draggable({ containment: "#wall", scroll: false, cursorAt: { top: 25, left: 0 }, revert: "invalid" });
    $("#dou4").draggable({ containment: "#wall", scroll: false, cursorAt: { top: 25, left: 0 }, revert: "invalid" });
    $("#dou5").draggable({ containment: "#wall", scroll: false, cursorAt: { top: 25, left: 0 }, revert: "invalid" });

    $("#taotie").droppable({
        drop: function(event, ui) {
            $(this).find("img");

        }
    });
});