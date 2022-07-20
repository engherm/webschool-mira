function hasSameId(cart, newItem) {
  for (const item of cart) 
    if (item.id === newItem.id) return true;
  return false;
}

module.exports = hasSameId;