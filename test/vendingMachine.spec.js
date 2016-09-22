describe('Vending Machine', function () {
  beforeEach(function () {
    vendingMachine.currentAmount = 0;
    vendingMachine.display = 'Sold Out';
  });
  it('should accept coins', function () {
    expect(vendingMachine.acceptCoins).toBeDefined();
  });
  it('should have a current amount', function () {
    expect(vendingMachine.currentAmount).toEqual(0);
  });
  it('should add to the current ammount', function () {
    vendingMachine.acceptCoins(.25);
    vendingMachine.acceptCoins(.10);
    expect(vendingMachine.currentAmount).toEqual(.35);
  });
  it('should reject pennies', function () {
    vendingMachine.acceptCoins(.01);
    expect(vendingMachine.currentAmount).toEqual(0);
  });
  it('should set currentAmount when refund is pressed', function () {
    vendingMachine.acceptCoins(.25);
    vendingMachine.refund();
    expect(vendingMachine.currentAmount).toEqual(0);
  });
  it('should give change when refund is pressed ', function () {
    vendingMachine.acceptCoins(.25);
    vendingMachine.acceptCoins(.10);
    vendingMachine.refund();
    expect(vendingMachine.coinSlot).toEqual(.35);
  });
  it('should be to select soda', function () {
    var products = [{
      brandName: 'soda'
    }];
    vendingMachine.load(products);
    vendingMachine.select('soda');
    expect(vendingMachine.returnSlot).toEqual({
      brandName: 'soda'
    });
  });

  it('should be able to select chips', function () {
    var products = [{
      brandName: 'chips'
    }];
    vendingMachine.load(products);
    vendingMachine.select('chips');
    expect(vendingMachine.returnSlot).toEqual({
      brandName: 'chips'
    });
  });
  it('should display sold out when there is no products', function () {
    var products = [];
    vendingMachine.load(products);
    vendingMachine.select('soda');
    expect(vendingMachine.display).toEqual('Sold Out');
  });

  it('should be able to load products', function () {
    var products = [{}];
    vendingMachine.load(products);
    expect(vendingMachine.display).toEqual('Insert Coin');
  });
  it('should still display sold out if loaded with nothing', function () {
    var products = [];
    vendingMachine.load(products);
    expect(vendingMachine.display).toEqual('Sold Out');
  });
});
