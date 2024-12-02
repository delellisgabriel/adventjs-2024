const createFrame = (names) => {
  let maxLength = 0;
  names.map((name) => {
    if (name.length > maxLength) {
      maxLength = name.length;
    }
  });
  // instead of using map I could have used Math.max like this:
  // const maxLength = Math.max(...names.map(str => str.length));
  const border = "*".repeat(maxLength + 4);
  const framedStrings = names.map((name) => `* ${name.padEnd(maxLength)} *`);
  return [border, ...framedStrings, border].join("\n");
};

export default createFrame;
