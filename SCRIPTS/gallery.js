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

var h1value = document.getElementById("h1ID");

// Declare a loop variable
var i;

function one() {

    x.style.display = 'flex';
    y.style.display = 'none';
    z.style.display = 'none';
    
    for (i = 0; i < elementsForam.length; i++) {
        elementsForam[i].style.msFlex = "50%";  // IE10
        elementsForam[i].style.flex = "50%";
    
        h1value.innerHTML = " Foram's hobbies are cooking delicious and healthy foods and reading books";
  }
}

function two() {

    y.style.display = 'flex';
    x.style.display = 'none';
    z.style.display = 'none';

  for (i = 0; i < elementsMSA.length; i++) {
    elementsMSA[i].style.msFlex = "50%";  // IE10
    elementsMSA[i].style.flex = "50%";

    h1value.innerHTML = " Maria's hobbies are cooking and eating delicious and healthy foods";
  }
}

function four() {

    z.style.display = 'flex';
    x.style.display = 'none';
    y.style.display = 'none';

  for (i = 0; i < elementsIshara.length; i++) {
    elementsIshara[i].style.msFlex = "50%";  // IE10
    elementsIshara[i].style.flex = "50%";
    
    h1value.innerHTML = " Ishara's hobby is gardening fruits, flowers and vegetables.";
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


function toggleLeftRight(imgid) {
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


function moveLeft(imgFromLeft, imgFromTop,imgright){
alert("helloleft");

//var myImgright = document.getElementById(imgright);
  alert(imgFromLeft);
  alert(imgFromTop);
  
document.getElementById(imgright).style.position = "absolute";
document.getElementById(imgright).style.left = imgFromLeft  + "px";
document.getElementById(imgright).style.top = imgFromTop  + "px";

}

function changeRight(clickedImageID){

var imageClicked = document.getElementById(clickedImageID).src;
var toReplaceImgID = clickedImageID + 1;

var getBasefilename = basename(imageClicked);
var getFutureFilenam = basename(document.getElementById(toReplaceImgID).src);

document.getElementById(clickedImageID).src="IMAGES/"+getFutureFilenam+".jpg";
document.getElementById(toReplaceImgID).src="IMAGES/"+getBasefilename+".jpg";

}

function basename(prevname) {
  return prevname.replace(/^(.*[/\\])?/, '').replace(/(\.[^.]*)$/, '');
}

function puttoTop(group,clickedImageID){
var imageClicked = document.getElementById(clickedImageID).src;

if (group === "foram") {
  var getfirstImage = document.getElementById(11).src;
  var currentImage = basename(getfirstImage);
 
  var getsourceClickedImg = basename(document.getElementById(clickedImageID).src);
  
document.getElementById(clickedImageID).src="IMAGES/"+currentImage+".jpg";
document.getElementById("11").src="IMAGES/"+getsourceClickedImg+".jpg";

}
else if(group === "msa") {
  var getfirstImage = document.getElementById(1).src;
  var currentImage = basename(getfirstImage);

  var getsourceClickedImg = basename(document.getElementById(clickedImageID).src);

document.getElementById(clickedImageID).src="IMAGES/"+currentImage+".jpg";
document.getElementById("1").src="IMAGES/"+getsourceClickedImg+".jpg";

}
else if (group === "ishara"){
  var getfirstImage = document.getElementById(21).src;
  var currentImage = basename(getfirstImage);

  var getsourceClickedImg = basename(document.getElementById(clickedImageID).src);

document.getElementById(clickedImageID).src="IMAGES/"+currentImage+".jpg";
document.getElementById("21").src="IMAGES/"+getsourceClickedImg+".jpg";
}
else{}

} 


function basename(prevname) {
  return prevname.replace(/^(.*[/\\])?/, '').replace(/(\.[^.]*)$/, '');
}

function puttoBottom(group,clickedImageID){
var imageClicked = document.getElementById(clickedImageID).src;

if (group === "foram") {
  var getfirstImage = document.getElementById(20).src;
  var currentImage = basename(getfirstImage);
 
  var getsourceClickedImg = basename(document.getElementById(clickedImageID).src);
  
document.getElementById(clickedImageID).src="IMAGES/"+currentImage+".jpg";
document.getElementById("20").src="IMAGES/"+getsourceClickedImg+".jpg";

}
else if(group === "msa") {
  var getfirstImage = document.getElementById(10).src;
  var currentImage = basename(getfirstImage);

  var getsourceClickedImg = basename(document.getElementById(clickedImageID).src);

document.getElementById(clickedImageID).src="IMAGES/"+currentImage+".jpg";
document.getElementById("10").src="IMAGES/"+getsourceClickedImg+".jpg";

}
else if (group === "ishara"){
  var getfirstImage = document.getElementById(30).src;
  var currentImage = basename(getfirstImage);

  var getsourceClickedImg = basename(document.getElementById(clickedImageID).src);

document.getElementById(clickedImageID).src="IMAGES/"+currentImage+".jpg";
document.getElementById("30").src="IMAGES/"+getsourceClickedImg+".jpg";
}
else{}

} 