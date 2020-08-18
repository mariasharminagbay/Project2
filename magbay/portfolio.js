function download() {
    var fileURL = "/magbay/AgbayMariaSharminResume.pdf"; 
    var fileName = "AgbayMariaSharminResume.pdf";
    var link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
