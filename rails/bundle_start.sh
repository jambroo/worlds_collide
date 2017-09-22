docker run --rm -v "$PWD":/usr/src/app -w /usr/src/app ruby:latest bundle install
docker build -t worlds_collide_rails .
docker run -it worlds_collide_rails

docker run -v "$PWD":/usr/src/app -it worlds_collide_rails bash




# bin/rails generate controller Trips save
# bin/rails generate model Trip src:string dest:string
# bin/rails db:migrate
