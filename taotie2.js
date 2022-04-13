$(function() {
    $("#dou").draggable({ containment: "#wall", scroll: false, cursorAt: { top: 25, left: 0 }, revert: "invalid" });

    $("#taotie").droppable({
        drop: function(event, ui) {
            $(this).find("img");

        }
    });
});