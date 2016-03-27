describe 'Message', ->
  expectedTime = null
  user = null
  message = null

  beforeEach ->
    expectedTime = Date.now()
    user = new User('Jenna El-Amin', 'jenna@jenna.jenna', 'Sunburst', 'http://goo.gl/KDbGJI')
    message = new Message('hello everypony!', expectedTime, user)

  it 'has content', ->
    expect(message.content).toEqual 'hello everypony!'

  it 'has a timestamp', ->
    expect(message.timestamp.getTime()).toEqual expectedTime

  it 'has an associated user', ->
    expect(message.user).toEqual user
