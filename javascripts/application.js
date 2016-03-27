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
      $('#nameInput').hide();
      $('#messageInput').show();
      return displayChatMessage(messages);
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
    var message, newUser;
    snapshot.val();
    newUser = new User(snapshot.val().name);
    if (newUser.fullName === user.fullName) {
      newUser = user;
    }
    message = new Message(snapshot.val().text, snapshot.val().time, newUser);
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
      var name;
      if (message.user.fullName === user.fullName) {
        name = 'You';
      } else {
        name = message.user.fullName;
      }
      return $('<div/>').text(message.content).prepend($('<em/>').text(name + ": ")).prepend($('<time/>').attr('datetime', message.timestamp.toISOString()).text(message.timestamp.toTimeString()).addClass('timeago')).appendTo($('#messagesDiv'));
    });
    return $("time.timeago").timeago();
  };
});
