function download() { 
              
    // var text = document.getElementById("text").value; 
    var file = "/iedirisi/Resume_Ishara-Jobs.pdf"; 
    var element = document.createElement('a'); 
    element.setAttribute('href',  
    'data:text/plain;charset=utf-8, ' ); 
    element.setAttribute('download', file); 
  
    document.body.appendChild(element); 
  
    
    element.click(); 
  
    document.body.removeChild(element); 
} 
  
// console.log(document.getElementById("btnResume"))
// document.getElementById("btnResume") 
// .addEventListener("click", function() { 
    
   
  
//     download(filename, text); 
// }, false); 