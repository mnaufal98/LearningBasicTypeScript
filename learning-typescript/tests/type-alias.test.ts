import { Category, Product } from "../src/type-alias";

describe("Type Alias", function () {
  it("should support in typescript", function () {
    const category: Category = {
      id: 1,
      name: "handphone",
    };

    const product: Product = {
      id: "1",
      name: "iphone 7+",
      price: 5000000,
      category,
      };
      console.info(category)
      console.info(product)
  });
});
