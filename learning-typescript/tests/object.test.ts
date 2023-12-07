describe("Object", function () {
  it("should suppport in typescript", function () {
      const person: { id: string; name: string, hobbies?: string[] } = {
      id: "1",
      name: "naufal",
    };
    person.id = "2";
    person.name = "opang";
    //   person.description = 'error'
  });
});
