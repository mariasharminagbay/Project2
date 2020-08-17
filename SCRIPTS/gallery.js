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
  var myImg = document.getElementById(imgid);
  //alert(imgid);
  var currWidth = myImg.clientWidth;
  var currheigt = myImg.clientHeight;


  if(currWidth == 450){
    //alert("450");
    myImg.style.width = (currWidth + 500) + "px";
    myImg.style.height = (currheigt + 500) + "px";
    //alert(currWidth + " after");  
  } else if (currWidth == 950){
    //alert("650");

    myImg.style.width = (currWidth + 500) + "px";
    myImg.style.height = (currheigt + 500) + "px";
    //alert(currWidth + " after");

  } 
  else if (currWidth ==  1451){
    //alert(currWidth + " 1451?");
    
    myImg.style.width = "100vw";
    myImg.style.height = "100vh";
  }
  else
  {
    myImg.style.width = "450px";
    myImg.style.height = "300px";
  }

}


function getNumImages() {
  var x = document.images.length;
  alert(x);
  //document.getElementById("demo").innerHTML = x;
  var y = document.getElementById("rowMSAID").querySelectorAll("img").length;
  alert(y);

}

function moveRight(imgid){
  //alert(imgid);
  var myImg = document.getElementById(imgid);
  
  alert("left:" + myImg.offsetLeft + " - top: " + myImg.offsetTop);

  //get the left of clicked image
  var imgFromLeft = myImg.offsetLeft;
  var imgFromTop = myImg.offsetTop;
  
  var imgright = imgid + 1;
  alert("imgid + 1 " + imgright);

  var myImgright = document.getElementById(imgright);
  alert(myImgright);
  alert("left:" + myImgright.offsetLeft + " - top: " + myImgright.offsetTop);

  //get the position of the right image to be moved to the left
  var imgRightToLeftLeft = myImgright.offsetLeft;
  alert(imgRightToLeftLeft);
  var imgRighttoLeftTop = myImgright.offsetTop;


    //set the position now
    document.getElementById(imgid).style.position = "sticky";
    document.getElementById(imgid).style.left = myImgright.offsetLeft + "px";
    document.getElementById(imgid).style.top = myImgright.offsetTop  + "px";


    moveLeft(53);




  //get the 

  //var toLeft = imgid - 1;
  //alert(toLeft);
  //document.getElementById(toLeft).style.left = "-100px";
  //document.getElementById(imgid).style.right = "+100px";
}

function moveLeft(imgidleft){
alert("helloleft");
  
  document.getElementById("53").style.position = "absolute";
  document.getElementById("53").style.left = "743px"; //imgFromLeft.offsetLeft  + "px";
  document.getElementById("53").style.top = "5px";//imgFromTop.offsetTop  + "px";

}
