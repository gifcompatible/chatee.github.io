myDataRef = new Firebase('https://q842lbplhsw.firebaseio-demo.com/')

messages = []

$(document).ready ->
  user = new User()

  $('#userInput').keypress (e) ->
    if e.keyCode == 13
      text = $('#nameInput').val()
      user = new User(text)
      $('#nameInput').hide()
      $('#messageInput').show()
      displayChatMessage messages

  $('#messageInput').keypress (e) ->
    if e.keyCode == 13

      text = $('#messageInput').val()
      time = Date.now()
      myDataRef.push name: user.fullName, text: text, time: time
      $('#messageInput').val('')


  myDataRef.on 'child_added', (snapshot) ->
    snapshot.val()
    newUser = new User(snapshot.val().name)
    if newUser.fullName == user.fullName
      newUser = user
    message = new Message(snapshot.val().text, snapshot.val().time, newUser)
    messages.push message
    messages.sort (a,b) ->
      if a.timestamp > b.timestamp
        return 1
      else if b.timestamp > a.timestamp
        return -1
      else
        return 0
    displayChatMessage messages


  displayChatMessage = (messages) ->
    $('#messagesDiv').text('')
    messages.forEach (message) ->
      if message.user.fullName == user.fullName
        name = 'You'
      else
        name = message.user.fullName
      $('<div/>').text(message.content).prepend(
        $('<em/>').text("#{name}: ")
      ).prepend(
        $('<time/>').attr('datetime', message.timestamp.toISOString()).text( message.timestamp.toTimeString()).addClass('timeago')
      ).appendTo($('#messagesDiv'))
    # $('#messagesDiv')[0].scrollTop =
    # $('#messagesDiv')[0].scrollHeight
    $("time.timeago").timeago()
