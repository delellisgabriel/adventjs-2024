import { describe, test, expect } from "vitest";
import prepareGifts from "./prepareGifts";

const testCases = [
  { input: [3, 1, 2, 3, 4, 2, 5], expected: [1, 2, 3, 4, 5] },
  { input: [6, 5, 5, 5, 5], expected: [5, 6] },
  { input: [], expected: [] },
];

//  Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁,
//  but some of them are duplicated and must be removed to avoid confusion.
//  Additionally, the gifts must be sorted in ascending order before being delivered to the elves.
//  Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list without duplicates, sorted in ascending order.
describe("Challenge #1 🎁 First gift repeated!", () => {
  test.each(testCases)(
    "gifts are sorted & not duplicated",
    ({ input, expected }) => {
      const sortedGifts = prepareGifts(input);
      expect(sortedGifts).toEqual(expected);
    }
  );
});
