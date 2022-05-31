class Model {
  // Récupère les données de l'API
  async fetchKanap() {
    return fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    // console.log(kanaps);
  }
}
