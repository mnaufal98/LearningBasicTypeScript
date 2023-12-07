describe("Type Alias", function () {
    it("should support in typescript", function () {
        const category = {
            id: 1,
            name: "handphone",
        };
        const product = {
            id: "1",
            name: "iphone 7+",
            price: 5000000,
            category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
