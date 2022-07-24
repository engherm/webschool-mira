function isUpdateable(obj) {
  for (const key in obj) {
    if (key !== 'id') {
      if (obj[key]) {
        return true; // besides id there's another field with value to update
      }
    }
  }
  return false; // besides the id field, all other fields are empty - no new data to update
}

module.exports = isUpdateable;
