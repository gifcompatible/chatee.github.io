describe 'User', ->
  user = null

  beforeEach ->
    user = new User('Jenna El-Amin', 'jenna@jenna.jenna', 'Pinkie Pie', 'http://piq.codeus.net/static/media/userpics/piq_102810_400x400.png')

  it 'has a full name', ->
    expect(user.fullName).toEqual 'Jenna El-Amin'

  it 'has an email', ->
    expect(user.email).toEqual 'jenna@jenna.jenna'


  it 'has best pony opinion', ->
    expect(user.bestPony).toEqual 'Pinkie Pie'

  it 'has an avatar', ->
    expect(user.avatar).toEqual 'http://piq.codeus.net/static/media/userpics/piq_102810_400x400.png'
