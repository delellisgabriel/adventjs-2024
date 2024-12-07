import { describe, test, expect, it } from "vitest";
import { organizeInventory } from "./organizeInventory";

// Santa Claus 🎅 is checking his workshop inventory to prepare gift delivery. The elves have recorded the toys in an array of objects, but the information is a bit disorganized. You need to help Santa organize the inventory.

// You will receive an array of objects, where each object represents a toy and has the properties:

// name: the name of the toy (string).
// quantity: the available quantity of that toy (integer).
// category: the category to which the toy belongs (string).
// Write a function that processes this array and returns an object that organizes the toys as follows:

// The keys of the object will be the categories of toys.
// The values will be objects that have the toy names as keys and the total quantities of each toy in that category as values.
// If there are toys with the same name in the same category, you must sum their quantities.
// If the array is empty, the function should return an empty object {}.
describe("Challenge #3: Organizing the inventory", () => {
  it("If the inventory is empty, the function should return an empty object {}", () => {
    const input = [];
    const expected = {};
    expect(organizeInventory(input)).toStrictEqual(expected);
  });

  test("The keys of the object will be the categories of toys.", () => {
    const input = [
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "car", quantity: 2, category: "toys" },
      { name: "racket", quantity: 4, category: "sports" },
    ];

    const result = organizeInventory(input);

    expect(result).toMatchObject({
      toys: expect.any(Object),
      sports: expect.any(Object),
    });
  });

  test("Toys with the same name in the same category, must sum their quantities", () => {
    const input = [
      { name: "book", quantity: 10, category: "education" },
      { name: "book", quantity: 5, category: "education" },
      { name: "paint", quantity: 3, category: "art" },
    ];

    const expected = {
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    };

    const result = organizeInventory(input);

    expect(result).toStrictEqual(expected);
  });
});
