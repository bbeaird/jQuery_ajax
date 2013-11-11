get '/' do
  erb :index
end

post '/color' do
  p "Inside color post route!"
  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)

  content_type :json
  {:cell => cell, :color => color}.to_json
end