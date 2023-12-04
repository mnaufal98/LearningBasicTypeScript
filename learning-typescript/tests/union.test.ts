describe("union", function () {
  it("should support in typescript", function () {
    let sample: number | string | boolean = "Naufal";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }
    expect(process("Naufal")).toBe("NAUFAL");
    expect(process(5)).toBe(7);
    expect(process(true)).toBe(false);
  });
});
