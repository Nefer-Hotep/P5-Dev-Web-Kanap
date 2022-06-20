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
    let cart = localStorage.getItem("cart");
    if (cart == null) {
      this.cart = [];
    } else {
      this.cart = JSON.parse(cart);
    }
  }

  save() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

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

  remove(product) {
    this.cart = this.cart.filter((p) => p.id != product.id);
    this.save(cart);
  }

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

  getNumberProduct() {
    let number = 0;
    for (let product of this.cart) {
      number = +product.quantity;
    }
    return number;
  }

  getTotalPrice() {
    let total = 0;
    for (let product of this.cart) {
      total += product.quantity * product.price;
    }
    return total;
  }
}
