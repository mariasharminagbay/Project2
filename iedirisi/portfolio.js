    function download() {
        var fileURL = "../iedirisi/Resume_Ishara-Jobs.pdf"; 
        var fileName = "Resume_Ishara-Jobs.pdf";
        var link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
   