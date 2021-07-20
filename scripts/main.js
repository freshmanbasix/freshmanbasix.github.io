let currentActiveWiki = document.getElementById("welcome");
currentActiveWiki.classList.add("active-wiki-entry");

let currentActiveToc = document.getElementById("welcome-toc");
currentActiveToc.classList.add("active-toc");

function setActive(entryName) {
  currentActiveWiki.classList.remove("active-wiki-entry");
  currentActiveToc.classList.remove("active-toc");

  let newActiveWiki = document.getElementById(entryName);
  newActiveWiki.classList.add("active-wiki-entry");
  currentActiveWiki = newActiveWiki;

  let newActiveToc = document.getElementById(entryName + "-toc");
  newActiveToc.classList.add("active-toc");
  currentActiveToc = newActiveToc;

  console.log(entryName);
  console.log(entryName + "-toc");
}
