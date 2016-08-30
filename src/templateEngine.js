var templateEngine = function (template) {
  return {
    render: function (data) {
      console.log(template);
      return template;
    }
  };
};
