describe('User', function() {
  var user;
  user = null;
  beforeEach(function() {
    return user = new User('Jenna El-Amin', 'jenna@jenna.jenna', 'Pinkie Pie', 'http://piq.codeus.net/static/media/userpics/piq_102810_400x400.png');
  });
  it('has a full name', function() {
    return expect(user.fullName).toEqual('Jenna El-Amin');
  });
  it('has an email', function() {
    return expect(user.email).toEqual('jenna@jenna.jenna');
  });
  it('has best pony opinion', function() {
    return expect(user.bestPony).toEqual('Pinkie Pie');
  });
  return it('has an avatar', function() {
    return expect(user.avatar).toEqual('http://piq.codeus.net/static/media/userpics/piq_102810_400x400.png');
  });
});
