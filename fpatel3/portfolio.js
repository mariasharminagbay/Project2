function download(file, text) { 
              
    
    var element = document.createElement('a'); 
    element.setAttribute('href',  
    'data:text/plain;charset=utf-8, ' 
    + encodeURIComponent(text)); 
    element.setAttribute('download', file); 
  
   
  
    document.body.appendChild(element); 
  
    
    element.click(); 
  
    document.body.removeChild(element); 
} 
  
 
document.getElementById("btn") 
.addEventListener("click", function() { 
    
    var text = document.getElementById("text").value; 
    var filename = "Latest_resume_with_cover_letter.docx"; 
  
    download(filename, text); 
}, false); 