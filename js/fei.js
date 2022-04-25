var fei = 0
$(document).ready(function() {
    $("#correct").hide();
    $("#wrong").hide();
    $("#fei1").click(function() {
        fei = 0

        if (fei) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(2000);


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(2000);
        }


    });
    $("#fei2").click(function() {
        fei = 0

        if (fei) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(2000);


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(2000);
        }


    });

    $("#fei3").click(function() {
        fei = 1

        if (fei) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(2000);


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(2000);
        }


    });

});