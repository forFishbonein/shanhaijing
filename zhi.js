var zhi = 0
$(document).ready(function() {
    $("#correct").hide();
    $("#wrong").hide();
    $("#zhi1").click(function() {
        zhi = 1

        if (zhi) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(2000);

        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(2000);
        }


    });
    $("#zhi2").click(function() {
        zhi = 0

        if (zhi) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(2000);


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(2000);
        }


    });

    $("#zhi3").click(function() {
        zhi = 0

        if (zhi) {

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