// Model : gère les données d'une application (l'ajout, la modification, la suppression...)

class Model {
  // Récupère les données de l'API
  async getListKanap() {
    return fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return data;
      });
  }

  // Récupère les données de l'API de l'id choisi
  async getKanap(id) {
    return fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return data;
      });
  }
}

class Cart {
  constructor() {
  // Récupère le panier du local storage
    let cart = localStorage.getItem("cart");
    if (cart == null) {
      this.cart = [];
    } else {
      this.cart = JSON.parse(cart);
    }
  }

  // Sauvegarde le panier dans le local storage
  save() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  // Ajout un produit dans le panier
  add(product) {
    let foundPoduct = this.cart.find((p) => p.id == product.id);

    if (foundPoduct != undefined) {
      foundPoduct.quantity++;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
    this.save();
  }

  // Supprime un produit du panier
  remove(product) {
    this.cart = this.cart.filter((p) => p.id != product.id);
    this.save(cart);
  }

  // Change une quantité d'un produit du panier
  changeQuantity(product, quantity) {
    let foundPoduct = this.cart.find((p) => p.id == product.id);

    if (foundPoduct != undefined) {
      foundPoduct.quantity += quantity;
      if (foundPoduct.quantity <= 0) {
        this.remove(foundPoduct);
      } else {
        this.save();
      }
    }
  }

  // Calcule la quantité total de produit dans le panier
  getNumberProduct() {
    let number = 0;
    for (let product of this.cart) {
      number += product.quantity;
    }
    return number;
  }

  // Calcule le prix total du panier
  getTotalPrice() {
    let total = 0;
    for (let product of this.cart) {
      total += product.quantity * product.price;
    }
    return total;
  }
}
