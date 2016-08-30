var createWorld = function (cells) {
  return {
    getCells: function () {
      return (cells || []);
    }
  };
};
