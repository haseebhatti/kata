xdescribe('world', function () {
  var world;
  var cells = {};

  beforeEach(function () {
    // world = createWorld([cells])
  });

  it('should return empty cells when world is created without cells', function () {
    world = createWorld();
    expect(world.getCells()).toEqual([]);
  });

  it('should return given cells when getCells is called', function () {
    expect(createWorld([cells]).getCells()).toEqual([cells]);
  });
});
