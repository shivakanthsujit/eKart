$(document).ready(function(){

$(".btn-secondary").hover(function(){
  	var ram = document.querySelector("#ram .btn.btn-secondary.active");
  	var st = document.querySelector("#storage .btn.btn-secondary.active");
  	var sram = ram.textContent.toString();
  	var sst = st.textContent.toString();
  	sram = sram.replace(/\t/g, '');
    sst = sst.replace(/\t/g, '');
  	$("#config").text(sst+", "+sram+" RAM");
  	var tt = 15999;
  	if(ram.classList.contains("option1"))
  		{
  			tt+=0;
  		}
  	else if(ram.classList.contains("option2"))
  		{
  			tt+=500;
  		}
  	else
		{
			tt+=1000;
		}
	if(st.classList.contains("option1"))
  		{
  			tt+=0;
  		}
  	else if(st.classList.contains("option2"))
  		{
  			tt+=500;
  		}
  		else
		{
			tt+=1000;
		}
	$("#price").text("Rs. "+tt+"/-");	
});

});
