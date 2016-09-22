var vendingMachine = (function () {
  var findItem = function (itemName) {
    return function (product) {
      return product.brandName === itemName;
    };
  };

  return {
    currentAmount: 0,
    coinSlot: 0,
    returnSlot: '',
    display: 'Sold Out',
    products: [],
    acceptCoins: function (coins) {
      if (coins !== .01) {
        this.currentAmount += coins;
      }
    },
    refund: function () {
      this.coinSlot = this.currentAmount;

      this.currentAmount = 0;
    },
    select: function (item) {
      this.returnSlot = this.products.find(findItem(item));
    },
    load: function (products) {
      this.products = products;
      if (products.length > 0) {
        this.display = 'Insert Coin';
      }
    }

  };
})();
