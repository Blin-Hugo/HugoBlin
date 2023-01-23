// JavaScript Document

function change1() {
	document.getElementById('change-main').src='./image/Gallery/Vinyle devant Hugo.png'
}
function change2() {
	document.getElementById('change-main').src='./image/Gallery/Vinyle dos Hugo.png'
}
function change3() {
	document.getElementById('change-main').src='./image/Gallery/Macaron Hugo copie.png'
}
	

function Transition() {
  const element = document.documentElement;
  let x = element.scrollLeft;
  let y = element.scrollTop;

  document.getElementById("teste").style.opacity = 1.5 - (y/255/3) ;
  let yy = y -100;
  document.getElementById("decal").style.left = yy +"px";
  document.getElementById("decal2").style.right = yy +"px";
  let yyy = y -1100;
  document.getElementById("decal11").style.left = yyy +"px";
  document.getElementById("decal22").style.right = yyy +"px";


  if (y/255 < 2.3) {
  document.getElementById("vinyle").style.opacity = 0 + (y/255/3) ;
  
  }else{
	document.getElementById("vinyle").style.opacity = 2.3 - (y/255/3) ;
	}



	




  if (y/255 < 1) {
	 
	document.getElementById("teste2").style.opacity = 1-(y/255);
	
        document.getElementById("myDIV").style.backgroundColor = "rgba(0,0,0," + (y/255) + ")" ;
		document.getElementById("ecrit").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
		document.getElementById("ecrit2").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	document.getElementById("ecrit3").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	document.getElementById("ecrit4").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
		document.getElementById("vm1").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
		document.getElementById("vm2").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	document.getElementById("vm3").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	document.getElementById("vm4").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	
} else {
	document.getElementById("teste3").style.opacity = 3-(y/255);
	document.getElementById("teste").style.opacity = 4.5-(y/255);
	document.getElementById("teste4").style.opacity = ((y/255)-3);
	document.getElementById("myDIV").style.backgroundColor = "rgba(0,0,0," + (2-(y/255)) + ")" ;
		document.getElementById("ecrit").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
		document.getElementById("ecrit2").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("ecrit3").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("ecrit4").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("vm1").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
		document.getElementById("vm2").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("vm3").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("vm4").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
}
}
