function download() {
    var fileURL = "/fpatel3/Resume_foram.pdf"; 
    var fileName = "Resume_foram.pdf";
    var link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
