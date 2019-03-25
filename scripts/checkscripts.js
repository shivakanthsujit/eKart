$(document).ready(function(){
$("#invoice").hide();
$('.alert').hide();
var zip = document.getElementById("zip");
var zipI = document.getElementById("zipInvalid");
var gBtn = document.getElementById("guestBtn");
var gFrm = document.getElementById("guest");
zip.addEventListener("input", function () {
    
    if(zip.value.match(/[a-z]/i) || zip.value.length > 6)
    {
        $("#zipInvalid").removeClass("hide");
    }
    else
    {
        $("#zipInvalid").addClass("hide");
    }
});

$("#guest").submit(function(e) {
    e.preventDefault();
    $("#guestBtn").text("Continue");
});

$("#guestBtn").click(function(){
    var f = gFrm.classList.contains("was-validated");
    if(f)
    {
        var name = $("#fname").val() +" " + $("#lname").val();
        var addr = $("#address").val() + "\n" + $("#city").val() + "-" + $("#zip").val() + "\n" + $('select').children(':selected').text(); 
        $("#invName").text(name);
        $("#invAddr").text(addr);
        $("#shopperDet").hide(2000);
        $("#invoice").show(2000);

    }
});

$("#placeOrder").click(function(){
    $("#placeOrder").hide();
    $("#placeOrder").addClass("placed");
    $('.alert').show(1000);
});
$(document).on("keydown", function (e) {
    if (e.key == "F5" || e.key == "F11" || 
        (e.ctrlKey == true && (e.key == 'r' || e.key == 'R')) || 
        e.keyCode == 116 || e.keyCode == 82) {

               e.preventDefault();
    }
});
window.onbeforeunload = function() {
    var t= $("#placeOrder").hasClass("placed");
    if(!t)
        return "Leave this page ? Your details will be lost.";
}
});