function hasSameId(cart, theProdId) {
  for (const item of cart) 
    if (item.id === theProdId) return true;
  return false;
}

module.exports = hasSameId;