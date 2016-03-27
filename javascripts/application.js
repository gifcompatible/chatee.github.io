var displayChatMessage, messages, myDataRef;

myDataRef = new Firebase('https://q842lbplhsw.firebaseio-demo.com/');

messages = [];

$(document).ready(function() {
  return $("time.timeago").timeago;
});

$('#messageInput').keypress(function(e) {
  var name, text, time;
  if (e.keyCode === 13) {
    name = $('#nameInput').val();
    text = $('#messageInput').val();
    time = Date.now();
    myDataRef.push({
      name: name,
      text: text,
      time: time
    });
    return $('#messageInput').val('');
  }
});

myDataRef.on('child_added', function(snapshot) {
  var message, user;
  message = snapshot.val();
  user = new User(message.name);
  message = new Message(message.text, message.time);
  return displayChatMessage(user, message);
});

displayChatMessage = function(user, message) {
  $('<div/>').text(message.content).prepend($('<em/>').text(user.fullName + ":")).appendTo($('#messagesDiv'));
  return $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};
