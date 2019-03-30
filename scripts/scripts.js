var search = document.getElementById('searchB');
var searchTerm = document.getElementById('searchT');

search.addEventListener("click",function test() {
  window.localStorage.setItem("searchTerm",searchTerm.value);
  window.localStorage.setItem("searchBtnClick","yes");
  window.location.href = 'search.html'
});
