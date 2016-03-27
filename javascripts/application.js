var messages, myDataRef;

myDataRef = new Firebase('https://q842lbplhsw.firebaseio-demo.com/');

messages = [];

$(document).ready(function() {
  var displayChatMessage, user;
  user = new User();
  $('#userInput').keypress(function(e) {
    var text;
    if (e.keyCode === 13) {
      text = $('#nameInput').val();
      user = new User(text);
      return $('#nameInput').hide();
    }
  });
  $('#messageInput').keypress(function(e) {
    var text, time;
    if (e.keyCode === 13) {
      text = $('#messageInput').val();
      time = Date.now();
      myDataRef.push({
        name: user.fullName,
        text: text,
        time: time
      });
      return $('#messageInput').val('');
    }
  });
  myDataRef.on('child_added', function(snapshot) {
    debugger;
    var message, newUser;
    message = snapshot.val();
    newUser = new User(message.name);
    if (newUser.fullName === user.fullName) {
      newUser = User;
    }
    message = new Message(message.text, message.time, newUser);
    messages.push(message);
    messages.sort(function(a, b) {
      if (a.timestamp > b.timestamp) {
        return 1;
      } else if (b.timestamp > a.timestamp) {
        return -1;
      } else {
        return 0;
      }
    });
    return displayChatMessage(messages);
  });
  return displayChatMessage = function(messages) {
    $('#messagesDiv').text('');
    messages.forEach(function(message) {
      return $('<div/>').text(message.content).prepend($('<em/>').text(" " + message.user.fullName + ": ")).prepend($('<time/>').attr('datetime', message.timestamp.toISOString()).text(message.timestamp.toTimeString()).addClass('timeago')).appendTo($('#messagesDiv'));
    });
    return $("time.timeago").timeago();
  };
});
