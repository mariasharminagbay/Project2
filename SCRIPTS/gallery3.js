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

function swap_after1(argument)
{
    var img1,img2;
    img1=document.getElementById('img1').src;
    img2=document.getElementById('img2').src;
    document.getElementById('img2').src=img1;
    document.getElementById('img1').src=img2;

}
function swap_after2(argument)
{
    var img1,img2;
    img1=document.getElementById('img1').src;
    img2=document.getElementById('img2').src;
    document.getElementById('img2').src=img1;
    document.getElementById('img1').src=img2;

}
/*
//Main Image Swap Function
function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var newImg;
    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;
}
*/
   
/*function ZoomIn(){
    var myImg=document.getElementById("img1");
    var currWidth=myImg.clientWidth;
    myImg.style.width=(currWidth + 50) + "px";

}*/
var currentpic=0;
function swap(){
    var images = new Array()
    images[0]= "/IMAGES/1.jpg" 
    images[1]= "/IMAGES/2.jpg"
    images[2]= "/IMAGES/3.jpg"

    var lastpic= images.length-1;
 if (currentpic != lastpic)
 {
    currentpic=0;
    document.getElementById('img1').src = images[currentpic];
 }else
  {
    currentpic++;
    document.getElementById('img2').src = images[currentpic];
  }

  var n,(n-1);
  n=document.getElementById('img1').src;
  (n-1)=document.getElementById('img2').src;
  document.getElementById('img2').src=img1;
  document.getElementById('img1').src=img2;
}

/*
var count=0;
function imageGrow(imgs){
    count += 1;
    z=count % 4;

    if(z==1)
    {
        var x=imgs;
        x.src=imgs.src;
        x.setAttribute("src",imgs.src);
        x.style.width="50vw";
        x.style.height="50vh";
        x.setAttribute("alt","image resize");
        x.innerHTML=imgs.alt;
        x.parentElement.style.display="block";

    }

    if(z==2)
    {
        var x=imgs;
        x.src=imgs.src;
        x.setAttribute("src",imgs.src);
        x.style.width="75vw";
        x.style.height="75vh";
        x.setAttribute("alt","image resize");
        x.innerHTML=imgs.alt;
        x.parentElement.style.display="block";
    }*/







































