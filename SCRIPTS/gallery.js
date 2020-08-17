window.onload = function() {
    document.getElementById("btnMSA").click();

}
// Get the elements with class="column"
//var elementsMSA = document.getElementsByClassName("columnMSA");
//var elementsForam = document.getElementsByClassName("columnForam");
//var elementsIshara = document.getElementsByClassName("columnIshara");

var elementsMSA = document.getElementsByClassName("rowMSA");
var elementsForam = document.getElementsByClassName("rowForam");
var elementsIshara = document.getElementsByClassName("rowIshara");

var y = document.getElementById("rowMSAID");
var x = document.getElementById("rowForamID");
var z = document.getElementById("rowIsharaID");
// Declare a loop variable
var i;

// Full-width images
function one() {

    x.style.display = 'flex';
    y.style.display = 'none';
    z.style.display = 'none';
    
    for (i = 0; i < elementsForam.length; i++) {
        elementsForam[i].style.msFlex = "50%";  // IE10
        elementsForam[i].style.flex = "50%";
  }
}

// Two images side by side
function two() {

    y.style.display = 'flex';
    x.style.display = 'none';
    z.style.display = 'none';

  for (i = 0; i < elementsMSA.length; i++) {
    elementsMSA[i].style.msFlex = "50%";  // IE10
    elementsMSA[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {

    z.style.display = 'flex';
    x.style.display = 'none';
    y.style.display = 'none';

  for (i = 0; i < elementsIshara.length; i++) {
    elementsIshara[i].style.msFlex = "50%";  // IE10
    elementsIshara[i].style.flex = "50%";
    
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("mygalleryHeader");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function zoomin(){
  var myImg = document.getElementById("sky");
  var currWidth = myImg.clientWidth;
  if(currWidth == 500){
      alert("Maximum zoom-in level reached.");
  } else{
      myImg.style.width = (currWidth + 50) + "px";
  } 
}
function zoomout(){
  var myImg = document.getElementById("sky");
  var currWidth = myImg.clientWidth;
  if(currWidth == 50){
      alert("Maximum zoom-out level reached.");
  } else{
      myImg.style.width = (currWidth - 50) + "px";
  }
}


function toggleColor(imgid) {
  //var el = document.getElementById(imgid);
  

  /*if (!el.style.color || el.style.color == "blue")
    el.style.color = "red";
  
  else
    el.style.color = "blue"; */
  /*var el = imgid;
  el.src = imgid.src;
  el.setAttribute("src", imgid.src);
  el.style.width = "550px";
  el.style.height = "650px";
  el.setAttribute("alt","image resize");
  el.innerHTML = imgid.alt;

  el.parentElement.style.display = "block"; */


  var myImg = document.getElementById(imgid);
  //alert(myImg);
  var currWidth = myImg.clientWidth;
  var currheigt = myImg.clientHeight;

  if(currWidth == 450){
    myImg.style.width = (currWidth + 200) + "px";
    myImg.style.height = (currheigt + 200) + "px";
      
  } else if (currWidth == 650){
    myImg.style.width = (currWidth + 200) + "px";
    myImg.style.height = (currheigt + 200) + "px";
  } 
  else if (currWidth == 850){
    alert(currWidth);
    myImg.style.width = (currWidth - 400) + "px";
    myImg.style.height = (currheigt - 400) + "px";
  }
  else
  {
    myImg.style.width = "450px";
    myImg.style.height = "300px";
  }

}
