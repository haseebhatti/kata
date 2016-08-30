xdescribe('leap year', function () {
  var leapYear;
  beforeEach(function () {
    leapYear = leapYearFactory();
  });
  it('should be defined', function () {
    expect(leapYear).toBeDefined();
  });
  it('should return  true if the year is divisble by 4 ', function () {
    expect(leapYear.isDivisibleByFour(1996)).toEqual(true);
  });
  it('should return  true if the year is not divisble by 4 ', function () {
    expect(leapYear.isDivisibleByFour(1995)).toEqual(false);
  });
  it('should return true if the year is divisble by 100 and 4', function () {
    expect(leapYear.divideby4and100(2000)).toEqual(true);
  });
  it('should return false if the year is not divisble by 100 and 4', function () {
    expect(leapYear.divideby4and100(2001)).toEqual(false);
  });
  it('should return true if the year is divisble by 400 and 100', function () {
    expect(leapYear.calculate(2400)).toEqual(true);
  });
  it('should return false if the year is not divisble by 100 and 400', function () {
    expect(leapYear.calculate(2401)).toEqual(false);
  });
});
