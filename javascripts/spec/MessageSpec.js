describe('Message', function() {
  var expectedTime, message, user;
  expectedTime = null;
  user = null;
  message = null;
  beforeEach(function() {
    expectedTime = Date.now();
    user = new User('Jenna El-Amin', 'jenna@jenna.jenna', 'Sunburst', 'http://goo.gl/KDbGJI');
    return message = new Message('hello everypony!', expectedTime, user);
  });
  it('has content', function() {
    return expect(message.content).toEqual('hello everypony!');
  });
  it('has a timestamp', function() {
    return expect(message.timestamp.getTime()).toEqual(expectedTime);
  });
  return it('has an associated user', function() {
    return expect(message.user).toEqual(user);
  });
});
