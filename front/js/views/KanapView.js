class KanapView {
  render(kanap) {
    // Appel l'image et créer une balise <img>
    const itemImg = document.querySelector(".item__img");
    const kanapImg = document.createElement("img");

    itemImg.appendChild(kanapImg);
    kanapImg.setAttribute("src", `${kanap.imageUrl}`);

    // Appel le nom et l'insère dans le <h3>
    const itemTitle = document.getElementById("title");
    itemTitle.textContent = kanap.name;

    // Appel le prix est l'insère dans la span #price
    const itemPrice = document.getElementById("price");
    itemPrice.textContent = kanap.price;

    // Appel la description et l'insère dans l'id #description
    const itemDescription = document.getElementById("description");
    itemDescription.textContent = kanap.description;

    // Appel les options de couleur
    let selectColors = document.getElementById("colors");
    // console.log(selectColors);

    // console.log(kanap.colors);

    // kanap.colors.forEach((color) => {
    //   console.log(color);

    //   const createOptionColor = document.createElement("option");
    //   // console.log(createOptionColor);

    //   createOptionColor.textContent = `${color}`;
    //   createOptionColor.value = `${color}`
      
    //   // selectColors.appendChild("createOptionColor");
    // });

    let optionColor = []

    optionColor.forEach((value,text) => {

      optionColor[text] = new Option(value, text)
    })
    console.log(optionColor);
  }
}
