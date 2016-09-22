function RedPencilProm (item) {
  this.active = false;
  this.item = item;
}
RedPencilProm.prototype.getItem = function () {
  return this.item;
};
RedPencilProm.prototype.reducePrice = function (reduction) {
  this.active = promo.Active(reduction);

  this.item.salePrice = this.item.basePrice * calcPercent(reduction);
};

function promoActive (reduction) {
  if (reduction >= 5 && reduction <= 30) {
    return true;
  } else {
    return false;
  }
}

function calcPercent (reduction) {
  var percent = (100 - reduction) / 100;
  return percent;
}

RedPencilProm.prototype.isActive = function () {
  return this.active;
};
