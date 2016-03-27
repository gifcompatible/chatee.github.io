describe('Message', function() {
  var expectedTime, message;
  expectedTime = null;
  message = null;
  beforeEach(function() {
    expectedTime = Date.now();
    return message = new Message('hello everypony!', expectedTime);
  });
  it('has content', function() {
    return expect(message.content).toEqual('hello everypony!');
  });
  return it('has a timestamp', function() {
    return expect(message.timestamp.getTime()).toEqual(expectedTime);
  });
});
