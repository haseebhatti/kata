describe('red pencil promotion', function () {
  var initialItem, promo;
  beforeEach(function () {
    initialItem = {
      name: 'Pencil',
      basePrice: 4.10
    };
    promo = new RedPencilProm(initialItem);
  });
  it('should be defined', function () {
    expect(RedPencilProm).toBeDefined();
  });
  it('should be able to return an item ', function () {
    expect(promo.getItem()).toEqual(initialItem);
  });
  it('should be able to reduce price', function () {
    promo.reducePrice(10);
    expect(promo.getItem().salePrice).toEqual(3.69);
  });
  it('should be able inactive when intialized', function () {
    expect(promo.isActive()).toEqual(false);
  });
  it('should be inactive when price is reduced less then 5 percent ', function () {
    promo.reducePrice(0);
    expect(promo.isActive()).toEqual(false);
  });
  it('should be active when price is reduced equal to 5 percent ', function () {
    promo.reducePrice(5);
    expect(promo.isActive()).toEqual(true);
  });
  it('should be active when price is reduced by 30 percent', function () {
    promo.reducePrice(30);
    expect(promo.isActive()).toEqual(true);
  });
  it('should be inactive when price is reduced by more than 30 percent', function () {
    promo.reducePrice(31);
    expect(promo.isActive()).toEqual(false);
  });
});
