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