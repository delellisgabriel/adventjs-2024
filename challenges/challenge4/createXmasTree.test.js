import { describe, test, expect } from "vitest";
import { createXmasTree } from "./createXmasTree";
// It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

// The function should return a string that represents the Christmas tree, constructed as follows:

// The tree is made up of triangles of special characters.
// The spaces on the sides of the tree are represented with underscores _.
// All trees have a trunk of two lines, represented by the # character.
// The tree should always have the same length on each side.
// You must ensure the tree has the correct shape using line breaks \n for each line.

describe("Challenge #4: 🎄 Decorating the Christmas tree", () => {
  test("The tree can't be smaller than 1 and can't be greater than 100", () => {
    const smallerInput = -10;
    const greaterInput = 101;
    expect(() => createXmasTree(smallerInput, "*")).toThrowError();
    expect(() => createXmasTree(greaterInput, "+")).toThrowError();
  });

  test("It creates the last line of the tree", () => {
    const input = 5;
    const result = [
      "____*____",
      "___***___",
      "__*****__",
      "_*******_",
      "*********",
      "____#____",
      "____#____",
    ];
    const tree = createXmasTree(input, "*");
    expect(tree).toEqual(result.join("\n"));
  });
});
