import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "12314345",
      npwp: "34234234",
    };

    // seller.npwp = '09090909'
    seller.name = "Toko sayaa";
    console.info(seller);
  });

  it("should support function interface", function () {
    interface addFunction {
      (value1: number, value2: number): number;
    }
    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", function () {
    interface stringArray {
      [index: number]: string;
    }
    const name: stringArray = ["budi", "naufal", "dodi"];
    console.info(name);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "naufal",
      address: "indonesia",
    };

    expect(dictionary["name"]).toBe("naufal");
    expect(dictionary["address"]).toBe("indonesia");
  });

  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Naufal",
      division: "IT",
    };
    console.info(employee);
    const manager: Manager = {
      id: "2",
      name: "opang",
      division: "IT",
      numberOfEmployees: 10,
    };
    console.info(manager);
  });
    
  it("should support function interface", function () {
      interface Person {
          name: string;
          sayHello(name: string): string
      }
      const person: Person = {
          name: 'Naufal',
          sayHello: function (name: string): string {
              return `Hello ${name}, my name is ${this.name}`
          }
      }
      console.info(person.sayHello('Joko'))
  });
});
