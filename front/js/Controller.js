class Controller {
  // Créer l'affichage des données reçu
  async kanapsDisplay() {
    let model = new Model();
    let kanaps = await model.getListKanap();

    let listKanapView = new ListKanapView();
    listKanapView.render(kanaps);
    // console.log(listKanapView);
  }

  async kanapDisplay() {
     // Créer une variable de l'emplacement actuel de l'Url(search la partie après le ?)
     const urlSearch = new URLSearchParams(window.location.search);

     // Créer une constante Get qui lit l'id
     const id = urlSearch.get("id");

    let model = new Model();
    let kanap = await model.getKanap(id);
console.log(kanap);
    let kanapView = new KanapView();
    kanapView.render(kanap);
    // console.log(kanapView);
  }
}
