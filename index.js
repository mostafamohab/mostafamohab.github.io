document.addEventListener('DOMContentLoaded', function() {
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            let panel = this.parentElement.children[this.parentElement.children.length - 1];
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});
function generatePDF() {
        const pdfPath = 'path/to/generated.pdf';
        const downloadLink = document.getElementById('download-link');
        downloadLink.href = pdfPath;
}
