describe 'Message', ->
  expectedTime = null
  message = null

  beforeEach ->
    expectedTime = Date.now()
    message = new Message('hello everypony!', expectedTime)

  it 'has content', ->
    expect(message.content).toEqual 'hello everypony!'

  it 'has a timestamp', ->
    expect(message.timestamp.getTime()).toEqual expectedTime
