var taotie = 0
$(document).ready(function() {
    $("#correct").hide();
    $("#wrong").hide();
    $("#taotie1").click(function() {
        taotie = 0

        if (taotie) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(2000);

        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(2000);
        }


    });
    $("#taotie2").click(function() {
        taotie = 1

        if (taotie) {

            $("#correct").fadeIn();
            $("#wrong").fadeOut();
            $("#correct").fadeOut(2000);


        } else {

            $("#correct").fadeOut();
            $("#wrong").fadeIn();
            $("#wrong").fadeOut(2000);
        }


    });

    $("#taotie3").click(function() {
        taotie = 0

        if (taotie) {

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