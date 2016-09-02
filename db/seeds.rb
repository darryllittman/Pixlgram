# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create({ username: "user", password: "password" })
User.create({ username: "user2", password: "password" })
User.create({ username: "user3", password: "password" })
User.create({ username: "user4", password: "password" })
User.create({ username: "user5", password: "password" })
User.create({ username: "user6", password: "password" })
User.create({ username: "user7", password: "password" })

Photo.create({ user_id: 1, location: "SF", caption: "hi" })
Photo.create({ user_id: 4, location: "SF", caption: "hi" })
Photo.create({ user_id: 4, location: "SF", caption: "hi" })
Photo.create({ user_id: 4, location: "SF", caption: "hi" })
Photo.create({ user_id: 4, location: "SF", caption: "hi" })
Photo.create({ user_id: 2, location: "SF", caption: "hi" })
Photo.create({ user_id: 2, location: "SF", caption: "hi" })
Photo.create({ user_id: 1, location: "SF", caption: "hi" })
