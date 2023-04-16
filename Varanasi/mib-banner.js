//document.body.onload = addElement;

function addElement () { 
 // create a new div element 
 // and give it popup content 
 var newDiv = document.createElement("div"); 
 newDiv.setAttribute("style", "position: fixed; width: 100%; height: 100%;z-index: 9999991;");	
 newDiv.setAttribute("id", "popup");	
 newDiv.innerHTML +='<div style=" position: fixed; background: #000; width: 100%;height: 100%;opacity: .6; z-index: 9999992;            "></div><div style="  position: absolute;width: 80%; z-index: 9999993;display: block; top: 100px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); border-radius: 5px;  box-shadow: rgb(170, 170, 170) 0px 2px 8px; overflow: hidden; margin: auto; left: 0;  right: 0;  text-align: center;"><button class="open_button" onClick="closeMIBPopup()" style="position: absolute; background: #fff;color: #000;right: 3px; top: 5px; border-radius: 50%; width: 32px; height: 32px; line-height: 20px; font-size: 18px; font-weight: bold; cursor: pointer;    box-shadow: 0 0 10px 0 #000;">X</button><div class="popup_body" style=" "><a href="https://twitter.com/COVIDNewsByMIB" style="curser:pointer;" target="_blank"><img src="https://www.mib.gov.in/sites/default/files/corona.jpg?11"  alt="Banner" style=" width: 100%;"/></a></div></div>';   

 // add the newly created element and its content into the DOM 
 //var currentDiv = document.getElementById("main_container"); 
 document.body.insertBefore(newDiv, document.body.firstChild); 

 // open popup onload
 openMIBPopup();
}

function openMIBPopup() {
	//alert('sdf');
 var el = document.getElementById('popup');
 el.style.display = 'block';
 
 // Updates: set window background color black
 document.body.style.background = '#353333';
}

function closeMIBPopup() {
 var el = document.getElementById('popup');
 el.style.display = 'none';
 document.body.style.background = 'white';
}