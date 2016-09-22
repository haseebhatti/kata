describe('Jasmine Matchers', function () {
  beforeEach(function () {
    jasmine.addMatchers(peopleMatcher);
  });
  it('should compare two objects with different properties', function () {
    var obj1 = {
      name: 'haseeb',
      id: 3,
      age: 25,
      department: 'accounting'
    };
    var obj2 = {
      name: 'haseeb',
      id: 3,
      age: 26,
      department: 'janitorial'
    };
    expect(obj1).samePerson(obj2);
  });
  var peopleMatcher = {
    samePerson: function () {
      return {
        compare: function (actual, expected) {
          var match = false;
          console.log(actual, expected);
          if (actual.id === expected.id && actual.name === expected.name) {
            match = true;
          }
          return {
            pass: match
          };
        }
      };
    }
  };
});
