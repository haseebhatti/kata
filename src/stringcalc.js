function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function sumString (str1, str2) {
  var x = parseInt(str1, 10);
  var y = parseInt(str2, 10);
  console.log(x, y);
  return x + y;
}
function parseString (str) {
  var array;
  if (str == '') {
    array = [0];
  }else {
    array = str.split(',');
    if (array.length === 1) {
      array = [parseInt(array[0], 10)];
    }
  }
  return array;
}
var stringCalc = {
  add: function (num) {
    return parseString(num).reduce(sumString, 0);
  }
};
