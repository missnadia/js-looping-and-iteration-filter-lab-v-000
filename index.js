function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, letter) {
  return drivers.filter(function (driverName) {
    return driverName.slice(0, letter.length) === letter;
  });
}

function matchName (drivers, word) {
  
}