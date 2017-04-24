$(document).ready(function()
{
    var button = document.getElementById("button");

    $("#input").keypress(function(e){
            if(e.which == 13)
            {
                $("#button").click();
            }
    });

    button.onclick = function(){
        wiki();
    };


    var wiki = function()
    {
        $(".results").html("");
        var search = document.getElementById("input");

        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search.value + "&format=json&callback=?";

        $.ajax({
            type: 'GET',
            url: url,
            async: 'true',
            dataType: 'json',
            success: function(data){
                console.log(data);
      


                $(".results").css('display', 'block');
                for(var i = data[1].length - 1; i >= 0; i--)
                {
                    $(".results").prepend("<a href=" + data[3][i] + "><section  class='container response1'><p class='title'> -" + data[1][i] + "</p><p class='snippet'>'" + data[2][i] + "'</p></section></a>")
                    console.log(i);

                    $(".response1").css('background', '#999').fadeIn(100);
                }

            },
            error: function(errorMessage){
                $('.response1').text("Error in retrieving Wiki");
            }
        });
        search.value = "";
    };

});