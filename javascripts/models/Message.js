var Message;

Message = (function() {
  function Message(content, timestamp, user) {
    this.content = content;
    this.timestamp = new Date(timestamp);
    if (user instanceof User) {
      this.user = user;
    } else {
      throw "User argument must be a User.";
    }
  }

  return Message;

})();
