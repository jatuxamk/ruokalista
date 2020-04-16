$(function(){

    let tiedot;

    $.ajax({
        url: "/api",
        method: "GET",
        success: function( result ) {

            tiedot = result;

            for (i=0; i<result.ruokalista.length; i++) {
                $("#ruokalista").append("<li>" + result.ruokalista[i].nimi + "</li>");
            }

        }
      });

      $("#lisaa").click(function () {

        tiedot.ruokalista.push({
                                    "id": "1000",
                                    "nimi": "Kesäkeitto",
                                    "ainekset": "Kaikkea hyvää",
                                    "hinta": "€15.00",
                                    "ruokalaji": "keitto",
                                    "ruokavalio": ""
                                });

        console.log(tiedot);

        $.ajax({
            url: "/api",
            method: "POST",
            data: tiedot,
            success: function( result ) {

                console.log(result);
    
            }
          });

      });

});
