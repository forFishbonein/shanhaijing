var fei = 0
$(document).ready(function() {
    $("#correct").hide();
    $("#wrong").hide();
    $("#fei1").click(function() {
        fei = 1

        if (fei) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
        }


    });
    $("#fei2").click(function() {
        fei = 0

        if (fei) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
        }


    });

    $("#fei3").click(function() {
        fei = 0

        if (fei) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
        }


    });

});