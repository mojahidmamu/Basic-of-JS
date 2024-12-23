function calculateToys() {
  const k = parseInt(document.getElementById('price').value); // Price of the toy
  const r = parseInt(document.getElementById('note').value);  // Value of the r-taka note
  const resultDiv = document.getElementById('result');

  if (isNaN(k) || isNaN(r) || k < 1 || k > 1000 || r < 1 || r > 9) {
      resultDiv.textContent = "Please enter valid values for k and r.";
      return;
  }

  // Check for multiple of 10 (using only 10-taka notes)
  if (k % 10 === 0) {
      resultDiv.textContent = `Papener can buy 1 toy using only 10-taka notes.`;
      return;
  }

  // Check if the remainder matches the r-taka note
  if ((k % 10) === r) {
      resultDiv.textContent = `Papener can buy 1 toy using the 10-taka notes and the ${r}-taka note.`;
      return;
  }

  // If none of the conditions are satisfied, output no valid purchase
  resultDiv.textContent = `Papener cannot buy the toy without needing change.`;
}
