const items = document.getElementById("items");

// const elementFactory = () => {

// }

// Créer une variable vide
let kanapProduct = [];

// Récupère les données de l'API
const fetchKanap = async () => {
  await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => (kanapProduct = data));

  // console.log(kanapProduct);
};

const kanapDisplay = async () => {
  await fetchKanap();
  for (let i = 0; i < kanapProduct; i++) {
    
    let ancre = document.createElement("a");
    ancre.href = "./product.html?id=";
    document.querySelector(".items").appendChild(ancre);


  }
};

kanapDisplay();

// elementFactory();
