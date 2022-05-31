class ListKanapView {
  render(kanaps) {
    // Récupère l'id de <section id="items">
    const items = document.getElementById("items");
    
    for (let i = 0; i < kanaps.length; i++) {
      const ancre = document.createElement("a");
      const article = document.createElement("article");
      const image = document.createElement("img");
      const titre = document.createElement("h3");
      const texte = document.createElement("p");

      // Ancre
      ancre.setAttribute("href", `./product.html?id=${kanaps[i]._id}`);
      items.appendChild(ancre);
      // Article
      ancre.appendChild(article);
      // Image
      article.appendChild(image);
      image.setAttribute("src", `${kanaps[i].imageUrl}`);
      image.setAttribute("alt:", `${kanaps[i].altTxt}`);
      // Titre
      article.appendChild(titre);
      titre.classList.add("productName");
      titre.textContent = `${kanaps[i].name}`;
      // Texte
      article.appendChild(texte);
      texte.classList.add("productDescription");
      texte.textContent = `${kanaps[i].description}`;
    }
  }
}
