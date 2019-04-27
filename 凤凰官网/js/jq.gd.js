function Show_Hidden(obj)
	{
	 if(obj.style.display=="block")
	 {
	  obj.style.display='none';
	 }
	 else
	 {
	  obj.style.display='block';
	 }
	}
	window.onload=function()
	{
	 var olink=document.getElementById("gd");
	 var odiv=document.getElementById("the_sp");
	 olink.onclick=function()
	 {
	  Show_Hidden(odiv);
	  return false;
	 }
	}