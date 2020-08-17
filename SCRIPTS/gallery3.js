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

function swap_after(argument)
{
    var img1,img2;
    img1=document.getElementById('img1').src;
    img2=document.getElementById('img2').src;
    document.getElementById('img2').src=img1;
    document.getElementById('img1').src=img2;

}

var imgThumbs = new Array (
    "t1.jpg",
    "t2.jpg",
    "t3.jpg"
    )
    
    //Main Image Array
    var imgArray = new Array (
    "f1.jpg",
    "f2.jpg",
    "f3.jpg"
    )
    
    //Image Path
    var imgPath = "images/portfolio/samples/";
    
    function preloadImages() {
         for(var i = 0; i < imgArray.length; i++) {
              var tmpImg = new Image;
              tmpImg.src = imgPath + imgArray[i];
         }
    }
//Thumbnail Image Swap Function
function loadThumb(thumbID) {
    var theThumb = document.getElementById('theThumb');
    var newThumb;
    newThumb = imgThumbs[thumbID];
    theThumb.src = imgPath + newThumb;
}

//Main Image Swap Function
function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var newImg;
    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;
}

   





































