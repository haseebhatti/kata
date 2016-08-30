xdescribe('FizzBizz', function () {
  it('Should be able to convert num', function () {
    expect(FizzBizz).toBeDefined();
  });
  it('Should return Fizz if num is divisble by 3', function () {
    expect(FizzBizz.convert(6)).toEqual('Fizz');
  });
});
