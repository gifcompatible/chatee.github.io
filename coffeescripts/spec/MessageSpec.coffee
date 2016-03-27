describe 'Message', ->
  message = null

  beforeEach ->
    message = new Message('hello everypony!', Date.now())

  it 'has content', ->
    expect(message.content).toEqual 'hello everypony!'

  it 'has a timestamp', ->
    expect(message.timestamp).toEqual jasmine.any(Date)
