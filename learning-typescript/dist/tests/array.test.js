"use strict";
describe("Array", function () {
    it("should same with javascript", function () {
        const names = ["nofal", "budi", "roni"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it("should readonly", function () {
        const hobbies = ["tidur", "main"];
        console.info(hobbies);
        //   hobbies[0] = "makan"
    });
    it("should support tuple", function () {
        const person = ["jodi", "bisma", 5];
        console.info(person);
        // person[0] = 'joko'
    });
});
