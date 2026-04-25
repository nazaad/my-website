let articles = [];

fetch("articles.json")
.then(res => res.json())
.then(data => {
  articles = data;
  render(data);
  loadCategories();
});

// SHOW ARTICLES
function render(data){
  let list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach((a,i) => {
    list.innerHTML += `
      <div class="card">
        <img src="${a.image}">
        <h2>${a.title}</h2>
        <p>${a.content.substring(0,120)}...</p>
        <a href="article.html?id=${i}">Read More</a>
      </div>
    `;
  });
}

// SEARCH
document.addEventListener("input", e => {
  if(e.target.id === "search"){
    let v = e.target.value.toLowerCase();

    render(articles.filter(a =>
      a.title.toLowerCase().includes(v) ||
      a.content.toLowerCase().includes(v)
    ));
  }
});

// CATEGORY FILTER
document.addEventListener("change", e => {
  if(e.target.id === "categoryFilter"){
    let c = e.target.value;

    if(c === "All") return render(articles);

    render(articles.filter(a => a.category === c));
  }
});

// LOAD CATEGORIES
function loadCategories(){
  let select = document.getElementById("categoryFilter");
  let cats = [...new Set(articles.map(a => a.category))];

  cats.forEach(c => {
    select.innerHTML += `<option>${c}</option>`;
  });
}