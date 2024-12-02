import { describe, test, expect } from "vitest";
import createFrame from "./createFrame";
// Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️,
// but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

// Rules:

// Given an array of names, you must create a rectangular frame that contains all of them.
// Each name must be on a line, aligned to the left.
// The frame is built with * and has a border one line thick.
// The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
describe("Challenge #2 🎁 Framing names", () => {
  test("frames a single name correctly", () => {
    const input = ["midu"];
    const expected = ["********", "* midu *", "********"].join("\n");
    expect(createFrame(input)).toBe(expected);
  });

  test("frames multiple names correctly", () => {
    const input = ["midu", "madeval", "educalvolpz"];
    const expected = [
      "***************",
      "* midu        *",
      "* madeval     *",
      "* educalvolpz *",
      "***************",
    ].join("\n");
    expect(createFrame(input)).toBe(expected);
  });
});
