
window.onload = function() {
    var i;
    var elementsMSA = document.getElementsByClassName("rowMSA");

    var y = document.getElementById('rowMSAID');

    imageCache('IMAGES/',1,30);
    addPics( document.getElementById('rowMSAID'), cache );

    y.style.display = 'flex';
    //x.style.display = 'none';
    //z.style.display = 'none';

  for (i = 0; i < elementsMSA.length; i++) {
    elementsMSA[i].style.msFlex = "25%";  // IE10
    elementsMSA[i].style.flex = "25%";
}

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

