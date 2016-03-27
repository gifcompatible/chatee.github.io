var Message;

Message = (function() {
  function Message(content, timestamp) {
    this.content = content;
    this.timestamp = new Date(timestamp);
  }

  return Message;

})();
