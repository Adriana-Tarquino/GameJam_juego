document.getElementById("descargar").addEventListener("click", function() { 
    let pdfpath = "https://drive.google.com/file/d/1dDLd0NHoNBYf3mp5Q2UWDNiVF_DWbgf9/view?usp=sharing";
    let link = document.createElement("a");
    link.href = pdfpath;
    link.download = "cartas";
    link.click();
});

document.getElementById("Guia").addEventListener("click", function() { 
    let pdfpath = "https://drive.google.com/file/d/1fQdSz3XlK9iBof0A3T5QNtmfJ3L8Ki_o/view?usp=sharing";
    let link = document.createElement("guia");
    link.href = pdfpath;
    link.download = "guia";
    link.click();
});