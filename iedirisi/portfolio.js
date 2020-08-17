// function download() { 
              
//     // var text = document.getElementById("text").value; 
//     var file = "/iedirisi/Resume_Ishara-Jobs.pdf"; 
//     document.getElementById('my_iframe').src = file;
// } 
  
// console.log(document.getElementById("btnResume"))
// document.getElementById("btnResume") 
// .addEventListener("click", function() { 

    function download() {
        var fileURL = "/iedirisi/Resume_Ishara-Jobs.pdf"; 
        var fileName = "Resume_Ishara-Jobs.pdf";
        var link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
   
  
//     download(filename, text); 
// }, false); 