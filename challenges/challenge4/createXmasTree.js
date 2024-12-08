/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
export function createXmasTree(height, ornament) {
  if (height < 1 || height > 100)
    throw new Error(
      `The size of the tree must be a number between 1 and 100, the input was: ${height}`
    );

  const tree = Array.from({ length: height }).map((_, i) => {
    const treeBranches = ornament + ornament.repeat(i * 2);
    const space = "_".repeat(height - 1 - i);
    return space + treeBranches + space;
  });

  const treeTrunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);

  return [...tree, treeTrunk, treeTrunk].join("\n");
}

// export function createXmasTree(height, ornament) {
//   // Validate input height
//   if (height < 1 || height > 100) {
//     throw new Error(`Tree height must be between 1 and 100. Provided height: ${height}`);
//   }

//   // Create tree body
//   const treeLines = [];
//   for (let i = 0; i < height; i++) {
//     // Calculate spaces and ornament placement
//     const spaces = '_'.repeat(height - 1 - i);
//     const branches = ornament.repeat(2 * i + 1);
//     treeLines.push(spaces + branches + spaces);
//   }

//   // Create trunk (two identical lines)
//   const trunkSpaces = '_'.repeat(height - 1);
//   const trunk = trunkSpaces + '#' + trunkSpaces;

//   // Combine tree body and trunk
//   return [...treeLines, trunk, trunk].join('\n');
// }
