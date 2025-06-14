
document.getElementById('search-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const query = e.target.value;
    document.getElementById('results').innerText = `Smart answer for "${query}" (in 0.4s)...`;
  }
});
