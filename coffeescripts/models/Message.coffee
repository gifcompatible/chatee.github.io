class Message
  constructor: (content, timestamp) ->
    @content = content
    @timestamp = new Date(timestamp)
