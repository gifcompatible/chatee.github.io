describe('Message', function() {
  var message;
  message = null;
  beforeEach(function() {
    return message = new Message('hello everypony!');
  });
  return it('has content', function() {
    return expect(message.content).toEqual('hello everypony!');
  });
});
