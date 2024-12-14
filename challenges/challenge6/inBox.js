/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
export function inBox(box) {
  const isGiftInsideBox = [...box.slice(1, -1)].some((value) =>
    value.match(/#\s*\*\s*#/) ? true : false
  );

  return isGiftInsideBox;
}
