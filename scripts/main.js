let currentActiveToc = document.getElementById("welcome-toc");
currentActiveToc.classList.add("active-toc");

function updateToc(tocID) {
  currentActiveToc.classList.remove("active-toc");

  let newActiveToc = document.getElementById(tocID);
  newActiveToc.classList.add("active-toc");
  currentActiveToc = newActiveToc;
}

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
  updateToc(articleName + "-toc");
}

openArticle("welcome");
// newContent('articles/welcome.html');
