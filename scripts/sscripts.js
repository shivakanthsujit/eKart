var check = window.localStorage.getItem("searchBtnClick");
$(document).ready(function(e) {
    if(check.search("yes")!=-1)
    {
        var sT = window.localStorage.getItem("searchTerm");
        $("#searchV").val(sT);
        loadResults();
        return false;

    }

    $('input').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            loadResults();
            return false;  
        }
    });   

    $("#searchB").click(loadResults);
        
});

function loadResults(){
    $.getJSON( "p.js", function( json ) {
        $( "#search-results" ).empty();
        console.log( "JSON Data: " + json[2]["product_name"] );
        var searchTerm  = document.getElementById("searchV").value;
        var results = [];
        var searchField = "product_name";
        var searchVal = searchTerm.toLowerCase();
        console.log(searchVal);
        for (var i=0 ; i < json.length ; i++)
        {
            if (json[i][searchField].toLowerCase().indexOf(searchVal) !== -1) {
                results.push(json[i]);
                console.log(json[i]["product_image"]);
                console.log(json[i]["product_page"]);
            }
        }
        if(results.length!=0)
        {
            var x = document.getElementById("noText");
            x.style.display = "none";
            for(var i=0; i < results.length; ++i)
            {
                var pN = results[i]["product_name"];
                var pB = results[i]["brand"];
                var pL = results[i]["product_page"]
                var pImg = results[i]["product_image"];
                var string = "<div class=\"card\"><div class=\"card-body\"><a href=\""+pL+"\"<h5 class=\"card-title\" style=\"text-decoration: none;\">"+pN+"</h5><hr class=\"my-2\"><p class=\"card-text h6\" style=\"text-decoration: none;\">"+pB+"</p></div></a></div>";
                $( "#search-results" ).append( string);
            }
        }
        else{
            var x = document.getElementById("noText");
            x.style.display = "block";
        }
    });
}