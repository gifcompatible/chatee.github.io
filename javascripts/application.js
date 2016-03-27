var displayChatMessage, myDataRef;

myDataRef = new Firebase('https://q842lbplhsw.firebaseio-demo.com/');

$('#messageInput').keypress(function(e) {
  var name, text, time;
  if (e.keyCode === 13) {
    name = $('#nameInput').val();
    text = $('#messageInput').val();
    time = Date.now();
    myDataRef.push({
      name: name,
      text: text
    });
    return $('#messageInput').val('');
  }
});

myDataRef.on('child_added', function(snapshot) {
  var message, user;
  message = snapshot.val();
  user = new User(message.name);
  message = new Message(message.text);
  return displayChatMessage(user, message);
});

displayChatMessage = function(user, message) {
  $('<div/>').text(message.content).prepend($('<em/>').text(user.fullName + ":")).appendTo($('#messagesDiv'));
  return $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};
