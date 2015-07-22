window.onload = generatePDF;

function generatePDF() {

  html2canvas(document.body, {
    background: '#ffffff',

    onrendered: function(canvas) {

      var doc = new jsPDF('p', 'in', 'letter');
      var imgData = canvas.toDataURL('image/png');

      doc.addImage(
        imgData,
        'PNG',
        0.5,
        0.5,
        7.5,
        10
      );

      doc.save('resume.pdf');

    },
    width: 1500,
    height: 2000
  });

}
