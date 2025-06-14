
function performSearch() {
  const query = document.getElementById('search').value;
  const resultBox = document.getElementById('results');
  resultBox.innerHTML = `<p>Results for: <strong>${query}</strong></p><p>Smarter answer will appear here...</p>`;
}

function startVoice() {
  alert("Voice search coming soon!");
}

function startCamera() {
  alert("Camera search coming soon!");
}
