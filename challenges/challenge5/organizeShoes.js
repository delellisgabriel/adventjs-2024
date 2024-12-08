/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
export function organizeShoes(shoes) {
  const iBoots = new Map();
  const rBoots = new Map();
  const completeSizeOfBootsArray = [];

  for (const shoe in shoes) {
    const currentShoe = shoes[shoe];
    if (currentShoe.type === "I") {
      iBoots.set(currentShoe.size, (iBoots.get(currentShoe.size) || 0) + 1);
    } else {
      rBoots.set(currentShoe.size, (rBoots.get(currentShoe.size) || 0) + 1);
    }
  }

  for (const [key, _] of iBoots) {
    if (rBoots.has(key)) {
      const minBoots = Math.min(rBoots.get(key), iBoots.get(key));
      completeSizeOfBootsArray.push(...Array(minBoots).fill(key));
    }
  }
  return completeSizeOfBootsArray;
}
