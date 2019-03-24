
var product = document.getElementsByTagName("h1");
var pName = product[0].id;
$(document).ready(function(){

$(".btn-secondary").click(function(){
  	var ram = document.querySelector("#ram .btn.btn-secondary.active");
  	var st = document.querySelector("#storage .btn.btn-secondary.active");
  	if(this.parentElement.id=="ram")
  		ram=this;
  	else
  		st=this;
  	var sram = ram.textContent.toString();
  	var sst = st.textContent.toString();
  	var temp = this.textContent.toString();
  	sram = sram.replace(/\t/g, '');
    sst = sst.replace(/\t/g, '');
    temp = temp.replace(/\t/g, '');
  	console.log("Clicked: "+ temp+" Clicked ID: "+ this.parentElement.id+" \nCurrent Ram:"+sram+" Current storage"+sst);
  	$("#config").text(sst+", "+sram+" RAM");
	  
	var tt;
	if(pName == "note6pro")
		tt = 15999;
	else if(pName == "mimix")
		tt = 34999;
	else if(pName == "go")
		tt = 4999;
	else if(pName == "note7")
		tt = 13999;
	else if(pName == "mi9")
		tt = 31790;
	else if(pName == "mia2")
		tt = 11990;
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
