var j = 0;
var i = 0;
var ao = 0;
var pazzle = 0;


$(document).ready(function() {
    $("#Puzzle1").click(function() {
        $("#Puzzle1").animate({ left: '100px', top: '-55px' });
        j = 1;

    });
});

$(document).ready(function() {
    $("#Puzzle6").click(function() {
        $("#Puzzle6").animate({ left: '-150px', top: '-55px' });
        i = 1;

    });
});

$(document).ready(function() {
    $("#Puzzle4").click(function() {
        ao = 1;
        pazzle = 1;

        if (pazzle) {
            $("#Puzzle2").animate({ left: '0', top: '0' });
            $("#Puzzle3").animate({ left: '0', top: '0' });
            $("#Puzzle4").animate({ left: '0', top: '0' });
            $("#Puzzle5").animate({ left: '0', top: '0' });
            $("#Puzzle4").animate({ left: '-10px', top: '-55px' });
        } else {
            $("#Puzzle4").animate({ left: '-10px', top: '-55px' });
        }



    });
});

$(document).ready(function() {
    $("#Puzzle2").click(function() {
        pazzle = 1;
        ao = 0;
        if (pazzle) {
            $("#Puzzle2").animate({ left: '0', top: '0' });
            $("#Puzzle3").animate({ left: '0', top: '0' });
            $("#Puzzle4").animate({ left: '0', top: '0' });
            $("#Puzzle5").animate({ left: '0', top: '0' });
            $("#Puzzle2").animate({ left: '105px', top: '-55px' });
        } else {
            $("#Puzzle2").animate({ left: '105px', top: '-55px' });
        }


    });
});

$(document).ready(function() {
    $("#Puzzle3").click(function() {
        pazzle = 1;
        ao = 0;
        if (pazzle) {
            $("#Puzzle2").animate({ left: '0', top: '0' });
            $("#Puzzle3").animate({ left: '0', top: '0' });
            $("#Puzzle4").animate({ left: '0', top: '0' });
            $("#Puzzle5").animate({ left: '0', top: '0' });
            $("#Puzzle3").animate({ left: '50px', top: '-55px' });
        } else {
            $("#Puzzle3").animate({ left: '50px', top: '-55px' });
        }


    });
});

$(document).ready(function() {
    $("#Puzzle5").click(function() {
        pazzle = 1;
        ao = 0;
        if (pazzle) {
            $("#Puzzle2").animate({ left: '0', top: '0' });
            $("#Puzzle3").animate({ left: '0', top: '0' });
            $("#Puzzle4").animate({ left: '0', top: '0' });
            $("#Puzzle5").animate({ left: '0', top: '0' });
            $("#Puzzle5").animate({ left: '-65px', top: '-55px' });
        } else {
            $("#Puzzle5").animate({ left: '-65px', top: '-55px' });
        }


    });
});



$(document).ready(function() {
    $("#correct").hide();
    $("#wrong").hide();
    $("#submit").click(function() {

        if (j == 1 && i == 1 && ao == 1 && pazzle == 1) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(2000);


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(2000);
        }


    });


})