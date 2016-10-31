module.exports = function(obj) {
  if (Object.keys(obj).length !== 0) {
    console.log("======================")
    console.log("VARIABLE CHECK")

    for (var prop in obj) {
      console.log(prop + ": " + obj[prop]);
    }
    console.log("======================")
  }
};