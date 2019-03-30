$(document).ready(function(){
  $(".card ").hover(function(){
    $(this).children("a").children(".card-img-overlay").toggleClass("hidden");
    $(this).children("a").children(".card-img").toggleClass("hvr");
  });
});

var search = document.getElementById('searchB');
var searchTerm = document.getElementById('searchT');

search.addEventListener("click",function test() {
  window.localStorage.setItem("searchTerm",searchTerm.value);
  window.localStorage.setItem("searchBtnClick","yes");
  window.location.href = '../search.html'
});

