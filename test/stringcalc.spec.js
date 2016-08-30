xdescribe('stringCalc', function () {
  it('should be defined', function () {
    expect(stringCalc).toBeDefined();
  });
  it('should have an add method which returns sum', function () {
    expect(stringCalc.add('1')).toEqual(1);
  });
  it('should return 0 if no value for num', function () {
    expect(stringCalc.add('')).toEqual(0);
  });
  it('should return sum of two strings', function () {
    expect(stringCalc.add('1,2')).toEqual(3);
  });

  it('should return sum of three strings', function () {
    expect(stringCalc.add('1,2,3')).toEqual(6);
  });
});
