class Message
  constructor: (content, timestamp, user) ->
    @content = content
    @timestamp = new Date(timestamp)
    if user instanceof User
      @user = user
    else
      throw "User argument must be a User."
