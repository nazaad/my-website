fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const content = document.getElementById("content");

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "article";
      div.setAttribute("data-title", item.title);

      div.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.content}</p>
      `;

      content.appendChild(div);
    });
  });

// Search
const search = document.getElementById("search");
search.addEventListener("keyup", function () {
  let value = this.value.toLowerCase();
  document.querySelectorAll(".article").forEach(article => {
    let title = article.dataset.title.toLowerCase();
    article.style.display = title.includes(value) ? "block" : "none";
  });
});