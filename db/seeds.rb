# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
greetings = [
  "Hello there! How are you today?",
  "Warmest greetings to you!",
  "Hey, hope you're having a fantastic day!",
  "Greetings and salutations!",
  "Hi! Wishing you a wonderful time ahead."
]

greetings.each do |greeting|
  Message.create(content: greeting)
end
