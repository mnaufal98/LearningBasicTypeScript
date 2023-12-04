describe("Any", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Muhammad naufal",
      age: 25,
    };

    person.age = 30;
    person.address = "indonesia";

    console.info(person);
  });
});
