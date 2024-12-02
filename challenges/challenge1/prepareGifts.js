const prepareGifts = (gifts) =>
  Array.from(new Set(gifts.sort((a, b) => a - b)));

export default prepareGifts;
