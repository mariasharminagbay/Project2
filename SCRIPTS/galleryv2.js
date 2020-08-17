
window.onload = function() {
    var i;
    var elementsMSA = document.getElementsByClassName("rowMSA");

    var y = document.getElementById('rowMSAID');

    imageCache('IMAGES/',1,12);
    addPics( document.getElementById('rowMSAID'), cache );

    y.style.display = 'flex';
    //x.style.display = 'none';
    //z.style.display = 'none';

  for (i = 0; i < elementsMSA.length; i++) {
    elementsMSA[i].style.msFlex = "25%";  // IE10
    elementsMSA[i].style.flex = "25%";
}
window.onload =init;
}
function addPics(container, arr){
    var i = 0, L = arr.length, docFrag = document.createDocumentFragment(), img;
    if(L){
      for( docFrag.appendChild(img=document.createElement('img')).src = arr[i]
         ; ++i<L
         
         ;  docFrag.appendChild(img.cloneNode(false)).src = arr[i]
        
         );
         
      container.appendChild(docFrag);
    }
  }
  
  function imageCache(base, firstNum, lastnum) {
      this.cache = [];
      var i =0;
      var img;
      for (var i = firstNum; i <= lastnum; i++) {
          img = new Image();
          //alert(base + i + ".jpg");
          img = base + i + ".jpg";
          //img.src = base + i + ".jpg";
          //alert(img);
          this.cache.push(img);
         
      }
  }
/* test */

var timer_id; // reference of the timer, needed to stop it
var speed = 50; // pixels/second
var period = 40; // milliseconds
var sprite; // the element that will move
var sprite_speed = 0; // move per period
var sprite_position = 100; // pixels


function animate ()
{
    sprite_position += sprite_speed;
    if (sprite_position < 0) sprite_position = 0;
    if (sprite_position > 200) sprite_position = 200;
    sprite.style.left = sprite_position + 'px';
}

function move(direction)
{
    if (timer_id) stop();
    sprite_speed = speed * period/1000 * direction;
    timer_id = setInterval (animate, period);
}

function stop()
{
    clearInterval (timer_id);
    timer_id = null;
}

function init()
{
   sprite = document.getElementById ("sprite"); // the HTML element we will move
   animate(); // just to initialize sprite position
}
