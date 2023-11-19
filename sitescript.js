
function showText(num) {
  // Ukryj wszystkie teksty
  for (let i = 1; i <= 7; i++) {
    document.getElementById('header' + i).style.display = 'none';
  }

  // Pokaż wybrany tekst
  document.getElementById('header' + num).style.display = 'block';
}

function showContent(num) {
  // Ukryj wszystkie teksty
  for (let i = 1; i <= 3; i++) {
    document.getElementById('content' + i).style.display = 'none';
  }

  // Pokaż wybrany tekst
  document.getElementById('content' + num).style.display = 'block';
}