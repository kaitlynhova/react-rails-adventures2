## React + Rails song CRUD interface

Great article to follow along to [here](https://blog.skcript.com/building-a-live-search-page-with-reactjs-rails-and-elasticsearch-197f2650438b#.ikr3tgreo)

*I had to change a few things from the tutorial in the code to get it to work, though.


### start on local

Clone the project and open it in your terminal. Run the following:

Install your gems
```
bundle install
```

Make sure [ElasticSearch](https://github.com/ankane/searchkick) is installed, then start your server in a separate tab in your console:
```
elasticsearch
```

Create, migrate, and seed your database:
```
rake db:create
rake db:migrate
rake db:seed
```

Start your server
```
rails server
```

visit localhost:3000 in your browser to check it out
