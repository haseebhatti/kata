var leapYearFactory = function (num) {
  function divideBy4 (year) {
    return year % 4 == 0;
    return year % 4 == 0 && year % 100 == 0;
  }
  function divideby4and100 (year) {
  }
  return {
    isDivisibleByFour: divideBy4,
    secondRule: divideby4and100,
    calculate: function () {}

  };
};

//   if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
//     return true
//   }else {
//     return false
//   }
// }
