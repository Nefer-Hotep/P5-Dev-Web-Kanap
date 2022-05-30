// Récupère l'id de <section id="items">
const items = document.getElementById("items");

// Créer une variable vide qui stockent les éléments
let kanaps = [];

// Récupère les données de l'API
const fetchKanap = async () => {
  await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => (kanaps = data));

  // console.log(kanaps);
};

// Créer l'affichage des données reçu
const kanapDisplay = async () => {
  await fetchKanap();

  for (let i = 0; i < 8; i++) {
    const ancre = document.createElement("a");
    const article = document.createElement("article");
    const image = document.createElement("img");
    const titre = document.createElement("h3");
    const texte = document.createElement("p")

    // Ancre
    ancre.setAttribute("href", `./product.html?id=${kanaps[i]._id}`);
    items.appendChild(ancre);
    // Article
    ancre.appendChild(article);
    // Image
    article.appendChild(image);
    image.setAttribute('src', `${kanaps[i].imageUrl}`)
    image.setAttribute('alt:', `${kanaps[i].altTxt}`)
    // Titre
    article.appendChild(titre);
    titre.classList.add("productName")
    titre.textContent = (`${kanaps[i].name}`)
    // Texte
    article.appendChild(texte)
    texte.classList.add("productDescription")
    texte.textContent = (`${kanaps[i].description}`)
  }
};

// Affiche les données
kanapDisplay();
