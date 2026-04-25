let articles = [];

fetch("articles.json")
.then(res => res.json())
.then(data => {
  articles = data;
  show(data);
});

function show(data){
  let list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach((a, i) => {
    list.innerHTML += `
      <div class="card">
        <h3>${a.title}</h3>
        <p>${a.content.substring(0,100)}...</p>
        <a href="article.html?id=${i}">Read More</a>
      </div>
    `;
  });
}

document.getElementById("search").addEventListener("input", e => {
  let val = e.target.value.toLowerCase();
  show(articles.filter(a => a.title.toLowerCase().includes(val)));
});