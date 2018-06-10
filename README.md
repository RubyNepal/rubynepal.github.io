## RubyNepal.org

The RubyNepal.org is a static site powered by [jekyll](https://jekyllrb.com/). The source code can be found on [github](https://github.com/RubyNepal/rubynepal.github.io/) and [site is hosted](https://rubynepal.org) on [netlify](https://app.netlify.com/sites/rubynepal).

## Contributing

If jekyll is new to you, you may want to go through its [docs](https://jekyllrb.com/docs/home/) first.
[CloudCannon](https://learn.cloudcannon.com/jekyll/why-use-a-static-site-generator/) has some excellent jekyll video tutorials as well.

Steps:

``` bash
# Fork the repo
github.com:RubyNepal/rubynepal.github.io

# Clone your forked repo
$ git clone git@github.com:<your_github_username>/rubynepal.github.io.git

# Create a new branch for you.
$ git pull orgin master # You should be in master branch
$ git checkout new-branch # Change or add post or do something there

# Make your changes.
$ bundle exec jekyll serve # Fires up local server at port 4000
# Preview the changes on localhost:4000

# Make sure linters are happy
$ bundle exec guard # to auto run tests and other linter checks (js, sass, html)

# Commit the changes
$ git commit -m 'My awesome contribution'

# Push your changes and
$ git push

# Make a pull request of your newly changed branch against
github.com/RubyNepal/rubynepal.github.io

# After you create a pull request, tests are run automatically on the newly created PR using Hound and TravisCI for style and lint checks.

# Deploy preview is auto created with web url via Netlify.
```

#### When you open a pull request, we'd appreciate if you follow some basic guidelines:

Describe what you're changing, and more importantly why you're changing it

Keep the pull request focused on one thing - if you make two different, unrelated changes, please separate them into two pull requests

## Maintainers

* [Saroj Maharjan](https://twitter.com/zoraslapen)
* [Susan Joshi](https://twitter.com/josisusan)
* [Rohit Joshi](https://twitter.com/roxxypoxxy)

## Contributors

* [Madhu Sudhan](https://twitter.com/sudhansubedi)

## LICENSE

See/read [The MIT License](/LICENSE).

## Logo licence

Jekyll and other projects' logos used in this project belong to their respective organisation.
"RubyNepal" logo is Copyright by RubyNepal. All rights reserved.
