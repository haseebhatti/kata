xdescribe('Template Engine', function () {
  var template,
    data;

  beforeEach(function () {
    template = "<p>Hello, my name is <%fname%> <%lname%>. I'm <%age%> years old.</p>";
    data = {
      fname: 'Joe',
      lname: 'King',
      age: 30

    };
  });
  xit('should return the rendered content when given a template and data', function () {
    expect(templateEngine(template).render(data)).toEqual("<p>Hello, my name is Joe King. I'm 30 years old.</p>");
  });
  it('should define templateEngine', function () {
    expect(templateEngine).toBeDefined();
  });
  it('should define templateEngine(template).render', function () {
    expect(templateEngine(template).render).toBeDefined();
  });
  it('should render text and comeback as text', function () {
    var renderObj = templateEngine('sdsdsd');
    expect(renderObj.render()).toEqual('sdsdsd');
  });
  it('Should return ', function () {});
});
