const detail = document.querySelector("#book-detail");
const params = new URLSearchParams(window.location.search);
const bookId = Number(params.get("id"));
const book = books.find(item => item.id === bookId);

if (!book) {
  detail.innerHTML = `<div><h1>Livre introuvable</h1><p class="muted">Ce livre n'existe pas ou le lien est incorrect.</p><a class="text-link" href="catalogue.html">Retour au catalogue</a></div>`;
} else {
  document.title = `${book.title} — Bibliothèque`;
  detail.innerHTML = `
    <div class="detail-cover cover-${book.color}">${book.title}</div>
    <div class="detail-copy">
      <p class="eyebrow">${book.category}</p><h1>${book.title}</h1>
      <p class="muted">Par ${book.author} · ${book.year}</p>
      <h2>Résumé</h2><p>${book.summary}</p>
      <a class="button" href="catalogue.html">Continuer l'exploration</a>
    </div>`;
}
