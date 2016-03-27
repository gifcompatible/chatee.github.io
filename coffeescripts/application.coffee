myDataRef = new Firebase('https://q842lbplhsw.firebaseio-demo.com/')

$('#messageInput').keypress (e) ->
  if e.keyCode == 13
    name = $('#nameInput').val()
    text = $('#messageInput').val()
    time = Date.now()
    myDataRef.push name: name, text: text
    $('#messageInput').val('')


myDataRef.on 'child_added', (snapshot) ->
  message = snapshot.val()
  user = new User(message.name)
  message = new Message(message.text)
  displayChatMessage user, message


displayChatMessage = (user, message) ->
  $('<div/>').text(message.content).prepend($('<em/>').text("#{user.fullName}:")).appendTo($('#messagesDiv'))
  $('#messagesDiv')[0].scrollTop =
  $('#messagesDiv')[0].scrollHeight
