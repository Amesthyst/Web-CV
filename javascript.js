document.getElementById("downloadBtn").addEventListener("click", () => {

    const button = document.querySelector(".top-actions");

    button.style.display = "none";

    const element = document.querySelector(".cv-container");

    html2pdf()
.set({
    margin: [10,0,10,10],
    filename: 'Ricky-Pratama-Liang-CV.pdf',

    image:{
        type:'jpeg',
        quality:1
    },

    html2canvas:{
        scale:3,
        useCORS:true
    },

    jsPDF:{
        unit:'mm',
        format:'a4',
        orientation:'portrait'
    }
})
      .from(element)
      .save()
      .then(() => {
        button.style.display = "block";
      });
});