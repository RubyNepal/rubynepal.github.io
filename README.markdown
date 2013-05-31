## rubynepal.org

The rubynepal.org site is a static site powered by [octopress](http://octopress.org/) and hosted with Github Pages.

## Contributing

If octopress is new to you, you may wanna go through its [docs](http://octopress.org/docs/) first.

Fork the repo and create a new branch for you.

Make your changes.

Preview the changes in your local.

Commit the changes.

Push and make a pull request.

Example snippets:

``` ruby
  # checkout to new branch
  $ gco -b 'add_feature'
  # Create a new page
  $ rake new_page[a_new_page]
  # Create a new blog post
  $ rake new_post[my_blog_post]
  $ rake generate
  $ rake preview
  # Fires up local server at port 4000
  $ git commit -m 'commit message'
  $ git push
```

#### When you open a pull request, we'd appreciate if you follow some basic guidelines:

Describe what you're changing, and more importantly why you're changing it

Keep the pull request focused on one thing - if you make two different, unrelated changes, please separate them into two pull requests

## For maintainers

Deploying is as easy as `rake deploy` and done.

## Logo licence

"RubyNepal" logo is Copyright 2013 by Ruby Nepal, All rights reserved.
