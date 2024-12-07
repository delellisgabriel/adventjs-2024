const prepareGifts = (gifts) =>
  Array.from(new Set(gifts)).toSorted((a, b) => a - b);

export default prepareGifts;
