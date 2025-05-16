
function loadPage(page) {
  fetch(page + '.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    })
    .catch(err => console.error('Eroare la încărcare:', err));
}

window.onload = () => loadPage('home');
