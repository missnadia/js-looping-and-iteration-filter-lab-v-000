function findMatching (drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
