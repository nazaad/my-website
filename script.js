const search = document.getElementById("search");
const articles = document.querySelectorAll(".article");

search.addEventListener("keyup", function() {
  let value = this.value.toLowerCase();

  articles.forEach(article => {
    let title = article.dataset.title.toLowerCase();
    article.style.display = title.includes(value) ? "block" : "none";
  });
});