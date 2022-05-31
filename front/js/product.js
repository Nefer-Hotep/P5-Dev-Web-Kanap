// Créer une variable de l'emplacement actuel de l'Url(search la partie après le ?)
const urlSearch = new URLSearchParams(window.location.search);

// Créer une constante Get qui lit l'id 
const id = urlSearch.get("id");

// Récupère les données de l'API de l'id choisi
const fetchKanapProduct = async () => {
  await fetch(`http://localhost:3000/api/products/${id}`)
    .then((res) => res.json())
    .then((data) => (kanap = data));

  console.log(kanap);
};

fetchKanapProduct();
