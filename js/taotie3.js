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

$(function() {
    $("#full").hide();
    $("#eat").click(function() {


        $("#dou").fadeOut();
        $("#dou2").fadeOut();
        $("#dou3").fadeOut();
        $("#dou4").fadeOut();
        $("#dou5").fadeOut();
        $("#full").fadeIn();
    });


});