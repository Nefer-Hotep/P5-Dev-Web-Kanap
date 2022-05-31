class Controller {
  // Créer l'affichage des données reçu
  async kanapDisplay() {
    let model = new Model();
    let kanaps = await model.fetchKanap();

    let listKanapView = new ListKanapView();
    listKanapView.render(kanaps);
    console.log(listKanapView);
  }
}


