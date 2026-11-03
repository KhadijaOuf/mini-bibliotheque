const grid = document.querySelector("#catalogue-grid");
const searchInput = document.querySelector("#search-input");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

function renderBooks(items) {
  grid.innerHTML = items.map(book => `
    <article class="book-card">
      <div class="cover cover-${book.color}"><span>${book.title}</span></div>
      <div class="book-card-body">
        <p class="book-category">${book.category}</p><h3>${book.title}</h3>
        <p class="muted">${book.author} · ${book.year}</p>
        <a class="text-link" href="livre.html?id=${book.id}">Voir le détail →</a>
      </div>
    </article>`).join("");
  resultCount.textContent = `${items.length} livre(s) trouvé(s)`;
  emptyState.hidden = items.length !== 0;
}

function filterBooks() {
  const query = searchInput.value.trim().toLocaleLowerCase("fr");
  const filtered = books.filter(book =>
    [book.title, book.author, book.category].some(value =>
      value.toLocaleLowerCase("fr").includes(query)
    )
  );
  renderBooks(filtered);
}
searchInput.addEventListener("input", filterBooks);
renderBooks(books);
