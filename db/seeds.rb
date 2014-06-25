Cause.delete_all
User.delete_all
user = User.create(username: "The original", email: 'Stuart123@gmail.com', password: 'password')
user1 = User.create(username: "Stewy", email: 'Stuartey@gmail.com', password: 'password')
user2 = User.create(username: "Steweyeyey", email: 'Stuartg@gmail.com', password: 'password')
c = Cause.create(title: "Net Neutrality", description: "Protect the free and equal net!", members: 542, total: 53211, user_id: 1)
c = Cause.create(title: "Wolf-Pac", description: "End Money in Politics", members: 125, total: 39200, user_id: 1)