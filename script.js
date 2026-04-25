let articles = [];

fetch("articles.json")
  .then(res => res.json())
  .then(data => {
    articles = data;
    render(data);
  });

function render(data){
  let list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach((a, i) => {
    list.innerHTML += `
      <div class="card">
        <h2>${a.title}</h2>
        <p>${a.content.substring(0,140)}...</p>
        <a href="article.html?id=${i}">Read full article</a>
      </div>
    `;
  });
}

// SMART SEARCH
document.addEventListener("input", (e) => {
  if(e.target.id === "search"){
    let val = e.target.value.toLowerCase();

    let filtered = articles.filter(a =>
      a.title.toLowerCase().includes(val) ||
      a.content.toLowerCase().includes(val)
    );

    render(filtered);
  }
});