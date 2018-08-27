function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, letter) {
  let nameLength = letter.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === letter;
  });
}
