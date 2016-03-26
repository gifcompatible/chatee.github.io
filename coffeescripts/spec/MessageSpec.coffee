describe 'Message', ->
  message = null

  beforeEach ->
    message = new Message('hello everypony!')

  it 'has content', ->
    expect(message.content).toEqual 'hello everypony!'
