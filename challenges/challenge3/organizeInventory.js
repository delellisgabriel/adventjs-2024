/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */

// this one got 4 stars out of 5 ⭐⭐⭐⭐
export function organizeInventory(inventory) {
  return inventory.reduce((sortedInventory, { name, quantity, category }) => {
    if (!sortedInventory[category]) {
      sortedInventory[category] = {};
    }
    sortedInventory[category][name] =
      (sortedInventory[category][name] || 0) + quantity;
    return sortedInventory;
  }, {});
}
// This one got 2 stars out of 5 ⭐⭐
// export function organizeInventory(inventory) {
//   const organizedInventory = {};
//   if (inventory.length === 0) return organizedInventory;

//   inventory.forEach((item) => {
//     const category = item.category;
//     const itemName = item.name;
//     if (!organizedInventory[category]) {
//       organizedInventory[category] = {};
//     }

//     if (!organizedInventory[category][itemName]) {
//       organizedInventory[category][itemName] = 0;
//     }

//     organizedInventory[category][itemName] += item.quantity;
//   });

//   return organizedInventory;
// }
