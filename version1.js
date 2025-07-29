document.getElementById("submitBtn").addEventListener("click", function () {
  const input = document.getElementById("carInput").value.trim();
  const numero = parseInt(input);

  if (!isNaN(numero) && numero >= 1 && numero <= 1000) {
    const pdfURL = numero + ".pdf";

    fetch(pdfURL)
      .then((res) => {
        if (res.status === 200 || res.ok) {
          window.open(pdfURL, "_blank");
        } else {
          window.location.href = "otros.html";
        }
      })
      .catch(() => {
        window.location.href = "otros.html";
      });
  } else {
    window.location.href = "otros.html";
  }
});
