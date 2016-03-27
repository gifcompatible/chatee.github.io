describe('Message', function() {
  var message;
  message = null;
  beforeEach(function() {
    return message = new Message('hello everypony!', Date.now());
  });
  it('has content', function() {
    return expect(message.content).toEqual('hello everypony!');
  });
  return it('has a timestamp', function() {
    return expect(message.timestamp).toEqual(jasmine.any(Date));
  });
});
