function updateWikiEntry(fileName) {
  let wikiElement = document.getElementById("wiki-entry-container");

  fetch(fileName)
  .then(response => response.text())
  .then((data) => {
    wikiElement.innerHTML = data
  })
}

function openArticle(articleName) {
  updateWikiEntry("articles/" + articleName + ".html");
}

openArticle("welcome");
// newContent('articles/welcome.html');
