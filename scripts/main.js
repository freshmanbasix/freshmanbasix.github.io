let currentActiveToc = document.getElementById("welcome-toc");
currentActiveToc.classList.add("active-toc");

function setActive(entryName) {
  currentActiveToc.classList.remove("active-toc");

  let newActiveToc = document.getElementById(entryName + "-toc");
  newActiveToc.classList.add("active-toc");
  currentActiveToc = newActiveToc;

  console.log(entryName + "-toc");
}

function newContent(fileName) {
  let wikiElement = document.getElementById("wiki-entry-container");

  fetch(fileName)
  .then(response => response.text())
  .then((data) => {
    wikiElement.innerHTML = data
  })
}

newContent('articles/welcome.txt')
