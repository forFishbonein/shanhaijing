var zhi = 0
$(document).ready(function() {
    $("#correct").hide();
    $("#wrong").hide();
    $("#zhi1").click(function() {
        zhi = 1

        if (zhi) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(3000);

        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(3000);
        }


    });
    $("#zhi2").click(function() {
        zhi = 0

        if (zhi) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(3000);


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(3000);
        }


    });

    $("#zhi3").click(function() {
        zhi = 0

        if (zhi) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(3000);


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(3000);
        }


    });

});