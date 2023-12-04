describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["nofal", "budi", "roni"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should readonly", function () {
    const hobbies: ReadonlyArray<string> = ["tidur", "main"];
    console.info(hobbies);

    //   hobbies[0] = "makan"
  });

  it("should support tuple", function () {
    const person: readonly [string, string, number] = ["jodi", "bisma", 5];

    console.info(person);

    // person[0] = 'joko'
  });
});
