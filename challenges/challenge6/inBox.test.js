import { describe, test, expect } from "vitest";
import { inBox } from "./inBox";

// We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

// The box has a present (*) and counts as "inside the box" if:

// It is completely surrounded by # on the box's edges.
// The * is not on the box's edges.
// Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.

// 1.- create a Set to get rid of corners
// 2.- search string with *, search for left # if there is a # search for right if not return false, if there is no right # return false else true

describe("Challenge #6 📦 Is the gift inside the box?", () => {
  const testCases = [
    {
      input: ["###", "#*#", "###"],
      expected: true,
    },
    {
      input: ["####", "#* #", "#  #", "####"],
      expected: true,
    },
    {
      input: ["#####", "#   #", "#  #*", "#####"],
      expected: false,
    },
    {
      input: ["#####", "#   #", "#   #", "#   #", "#####"],
      expected: false,
    },
  ];

  test.each(testCases)(
    "Shoes are organized and there are more than one pair of boots of the same size",
    ({ input, expected }) => {
      const isInBox = inBox(input);
      expect(isInBox).toEqual(expected);
    }
  );
});
