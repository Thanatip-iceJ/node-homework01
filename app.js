const fs = require("fs/promises");

fs.readFile("./products.json", "utf-8")
  .then((output) => {
    const all = [];
    const clothes = [];
    const shoes = [];
    const others = [];
    const camilo = [];
    const electronics = [];

    const productObj = JSON.parse(output).reduce((acc, item) => {
      all.push(item.id);
      if (item.category.name === "Clothes") clothes.push(item);
      if (item.category.name === "Shoes") shoes.push(item);
      if (item.category.name === "Camilo") camilo.push(item);
      if (item.category.name === "Others") others.push(item);
      if (item.category.name === "Electronics") electronics.push(item);

      acc.All = all.length;
      acc.Clothes = clothes.length;
      acc.Shoes = shoes.length;
      acc.Others = others.length;
      acc.Camilo = camilo.length;
      acc.Electronics = electronics.length;
      return acc;
    }, {});
    return productObj;
  })
  .then((output) => {
    return fs.writeFile("summed-product.json", JSON.stringify(output));
  })
  .then(() => console.log("The file is written successfully.."))
  .catch((err) => console.log(err));
