xdescribe('RomanNumerals', function () {
  describe('Validation', function () {
    it('check if numerals exists', function () {
      expect(numerals).toBeDefined();
    });

    it('should convert 1 to I', function () {
      expect(numerals(1)).toEqual('I');
    });
    it('should convert 2 to II', function () {
      expect(numerals(2)).toEqual('II');
    });
    it('should convert 3 to III', function () {
      expect(numerals(3)).toEqual('III');
    });
    it('should convert 4 to IV', function () {
      expect(numerals(4)).toEqual('IV');
    });
    it('should convert 5 to V', function () {
      expect(numerals(5)).toEqual('V');
    });
    it('should convert 6 to VI', function () {
      expect(numerals(6)).toEqual('VI');
    });
  });
  describe('Calculation', function () {
    it('should have a calculate method', function () {
      expect().toBeDefined();
    });
  });
});
