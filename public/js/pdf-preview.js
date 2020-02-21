// This script uses PDFObject which is a third party utility created by Phillip Hutchison https://pdfobject.com/
// which I'm using to embed PDFs in my HTML documents (specifically, my personal website)

var resume = "../files/brendenroland.pdf";
var resumeElement = document.getElementById("resume-download");
var pdfButton = document.createElement("button");
    pdfButton.setAttribute("class", "download-link-secondary");
var pdfText = document.createTextNode("Download Resumé");

// Check to see if the users' browser supports embedded PDFs and if their browser doesn't
// then we will replace the embedded PDF with a file download link to the PDF
if (PDFObject.supportsPDFs) {
    pdfButton.setAttribute("onclick", "renderPDF()");
} else {
    pdfButton.setAttribute("href", "files/brendenroland.pdf");
}

// Append the download/preview link to the document
pdfButton.appendChild(pdfText);
resumeElement.appendChild(pdfButton);

// An onclick function of an HTML button will execute this when the user selects "Download Resume"
function renderPDF() {
    // Remove the button element to clear up space
    resumeElement.removeChild(pdfButton);

    // Create and append the embedded PDF window
    var pdfWindow = document.createElement("embed");
    pdfWindow.setAttribute("src", resume);
    pdfWindow.setAttribute("type", "application/pdf");
    pdfWindow.setAttribute("width", "75%");
    pdfWindow.setAttribute("height", "750");
    resumeElement.appendChild(pdfWindow);
}