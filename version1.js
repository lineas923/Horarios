document.getElementById("submitBtn").addEventListener("click", function () {
  const input = document.getElementById("carInput").value.trim();
  const numero = parseInt(input);

  if (!isNaN(numero) && numero >= 1 && numero <= 1000) {
    const pdfURL = numero + ".pdf";

    fetch(pdfURL, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          window.open(pdfURL, "_blank"); // si el PDF existe
        } else {
          window.location.href = "otros.html"; // si no existe
        }
      })
      .catch(() => {
        window.location.href = "otros.html"; // si hay error de red
      });
  } else {
    window.location.href = "otros.html"; // si no es un número válido
  }
});
