---
title: Tools used to redesign rubynepal.org
layout: post
categories: development
author: madhusudhan
---
Rubynepal.org website is redesigned and this this post I am going to explain about the tools we used to redesign the rubynepal website.

*TLDR: We used [Jekyll](https://jekyllrb.com/docs/home/), which is a simple, blog-aware, static site generator. Css framework [bulma](https://bulma.io/), And some other jekyll packages like jekyll-analytics, jekyll-autolink_email, jekyll-paginate, jekyll-seo-tag, jekyll-youtube etc.*

#### Background

It was april 8, 2018 there was the Ruby on Rails meetup at NCIT College, Balkumari Lalitpur. So there was some sort of discussion about the community, We are taking lots of things from community like open source software and tools, lots of helps from the community. Only taking things from community is not the good idea but give something to the community is also great.

 And I asked one question to the panelists, question was "As a developer what kinds of contribution can I do for the community?" we got lots of good  responses from panelists and at last Saroj dai says "We are going to redesign rubynepal website, you can do some sort of contribution if your are interested".

I am not good on designing things and front end development but I showed some interest on it, that was the great opportunity for me if I get the chance as a contributor of rubynepal.org redesign. After some days I talked to Saroj dai, and he granted permission to me. Cheers!

#### Story Begins

Octopress was used to make rubynepal.org website, which is an obsessively designed toolkit for writing and deploying [Jekyll](https://jekyllrb.com/) blogs. But we chose [jekyll](https://jekyllrb.com/) to make redesign  because Octopress was not actively updated from 2016. You can found the rubynepal website repo in github [here](https://github.com/RubyNepal/rubynepal.github.io).

Let's talk about css framework, I see the twitter handle of saroj dai and there was the first tweet on his wall  was  about  bulma (A modern css framework based on bulma). You may guess that's why I chose bumla css framework and that's true. 

Some of the jekyll plugin used are as follows:

- **[jekyll-admin](https://github.com/jekyll/jekyll--admin)** :  A Jekyll plugin that provides users with a traditional CMS-style graphical interface to author content and administer Jekyll sites. 

- **[jekyll-avatar](https://github.com/benbalter/jekyll-avatar)** :  A Jekyll plugin for rendering GitHub avatars 

- **[jekyll-analytics](https://github.com/hendrikschneider/jekyll-analytics)** : Plugin to easily add webanalytics to your jekyll site. Currently Google Analytics, Piwik and mPulse are supported.

- **[jekyll-autolink_email](https://github.com/ivantsepp/jekyll-autolink_email)** : Autolink emails for your Jekyll.

- **[jekyll-email-protect](https://github.com/vwochnik/jekyll-email-protect)** : Email protection liquid filter for Jekyll.

- **[jekyll-feed](https://github.com/jekyll/jekyll-feed)** : A Jekyll plugin to generate an Atom (RSS-like) feed of your Jekyll posts.

- **[jekyll-paginate](https://github.com/jekyll/jekyll-paginate)** : Pagination Generator for Jekyll.

- **[jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)** : A Jekyll plugin to add metadata tags for search engines and social networks to better index and display your site's content.

- **[jekyll-youtube](https://github.com/jekyll/jekyll-seo-tag)** : A Jekyll plugin to add metadata tags for search engines and social networks to better index and display your site's content.

Some gems used for the development and test environment are as follows:

- **[html-proofer](https://github.com/gjtorikian/html-proofer)** : Test  rendered HTML files to make sure they're accurate. 

- **[jslint-v8](https://github.com/whoward/jslint-v8)** : Ruby gem for JSLint via the The Ruby Racer library (JavaScript V8 Engine) in a format targeted directly at CI environments and thoroughly tested.

- **[parallel](https://github.com/grosser/parallel)**  : Ruby: parallel processing made simple and fast.

- **[rubocop](https://github.com/bbatsov/rubocop)**  : A Ruby static code analyzer, based on the community Ruby style guide.

- **[scss-lint](https://github.com/brigade/scss-lint)**  : Configurable tool for writing clean and consistent SCSS.

- **[guard-bundler](https://github.com/guard/guard-bundler)**  : Bundler automatically install/update your gem bundle when needed.

- **[guard-rake](https://github.com/rubyist/guard-rake)** : guard-rake runs a rake task when files change.

- **[guard-rubocop](https://github.com/yujinakayama/guard-rubocop)** : Guard plugin for RuboCop.

We are planning to remove bulma css and add our own css after completing some high priority backlog tasks. In future we will make style guide for the rubynepal website so the contributer can contribute for the design easily. Let's see how it goes, And if you have any suggestion about design related things and If you found any issues please feel free to create new issues  [here](https://github.com/RubyNepal/rubynepal.github.io/issues).  

#### On to the Future

Some more plugins and gems will be added later during the process of development of the website and then we will update blog accordingly.
