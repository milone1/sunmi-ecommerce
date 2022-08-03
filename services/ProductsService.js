const PRODUCTS = [
  {
    id: 1,
    name: "Arroz chaufa",
    price: 45.50,
    image: require("../assets/product_images/1.png"),
    description:
      "Plato de origen peruano con mezcla china",
  },
  {
    id: 2,
    name: "Hamburguesa",
    price: 11.50,
    image: require("../assets/product_images/2.png"),
    description:
      "comida alta en grasas",
  },
  {
    id: 3,
    name: "Pierna de pollo",
    price: 20.50,
    image: require("../assets/product_images/3.png"),
    description:
      "comida echa en casa",
  },
  {
    id: 4,
    name: "Brochetas de carne",
    price: 15.50,
    image: require("../assets/product_images/4.png"),
    description:
      "Brochetas echas con verduras y carnes",
  },
  {
    id: 5,
    name: "Brochetas con papas",
    price: 25.50,
    image: require("../assets/product_images/5.png"),
    description:
      "Brochetas echas al vapor con papas",
  },
  {
    id: 6,
    name: "Tacos al pastor ",
    price: 6.50,
    image: require("../assets/product_images/6.png"),
    description:
      "Tacos al estilo mexicano.",
  },
  {
    id: 7,
    name: "Pizza",
    price: 22.50,
    image: require("../assets/product_images/7.png"),
    description:
      "Pizza con salsa de tomate",
  },
  {
    id: 8,
    name: "Pasta",
    price: 14.22,
    image: require("../assets/product_images/8.png"),
    description:
      "Pizza con salsa de tomate",
  },
  {
    id: 9,
    name: "Pizza",
    price: 15.42,
    image: require("../assets/product_images/9.png"),
    description:
      "Pizza con salsa de tomate",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
