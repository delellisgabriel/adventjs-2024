import { describe, test, expect } from "vitest";
import { organizeShoes } from "./organizeShoes";

// Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

// type indicates if it's a left boot (I) or a right boot (R).
// size indicates the size of the boot.
// Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

// Note: You can have more than one pair of boots of the same size!

describe("Challenge #5 👞 Shoe pairing", () => {
  const testCases = [
    {
      input: [
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 42 },
      ],
      expected: [38, 42],
    },
    {
      input: [
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "I", size: 38 },
        { type: "I", size: 38 },
        { type: "R", size: 38 },
      ],
      expected: [38, 38],
    },
    {
      input: [
        { type: "I", size: 38 },
        { type: "R", size: 36 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 43 },
      ],
      expected: [],
    },
  ];

  test.each(testCases)(
    "Shoes are organized and there are more than one pair of boots of the same size",
    ({ input, expected }) => {
      const organizedShoes = organizeShoes(input);
      expect(organizedShoes).toEqual(expected);
    }
  );
});
