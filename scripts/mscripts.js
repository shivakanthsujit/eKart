$(document).ready(function(){
  $(".card ").hover(function(){
    $(this).children("a").children(".card-img-overlay").toggleClass("hidden");
    $(this).children("a").children(".card-img").toggleClass("hvr");
  });
});
