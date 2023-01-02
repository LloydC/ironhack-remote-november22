function capitalize (string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function minimize(string){
  return string.toLowerCase();
}

module.exports = { capitalize, minimize};
