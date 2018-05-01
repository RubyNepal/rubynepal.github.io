---
layout: post
title: "How we build rubynepal using Octopress"
date: 2013-06-06 19:18
comments: true
categories: [development]
author: rohitrox
published: true
---

This is not another getting started with octopress guide, this is sharing of our experience and couple of hacks we did while developing rubynepal, that may be helpful to others.

In the beginning of June 2013, We came up with this idea of building a community website for ruby developers of nepal.
We didn't need to have a full content management features but we needed features like blog support, pages support, ease for deployments and easy contributing mechanism. Finally, we decided to build rubynepal.org with [octopress](http://octopress.org){:.rnw-link} and github pages. With this we could to tap out Markdown without needing a web-based WYSIWYG editor and type a command to send everything up to the free Github Pages service and our whole website would be a github repo, perfect for collaboration.

The [docs](http://octopress.org/docs/){:.rnw-link} has pretty neat documentation for installing octopress, configuring setting up github pages. Within few minutes basic website was up at github pages.

Next, themes, we forked this beautiful and responsive theme [greyshade](https://github.com/shashankmehta/greyshade){:.rnw-link} and customized it. Upto here we had a basic rubynepal.org up and running.

Now, octopress has its root path that displays the posts ie. essentially blog index, but we needed to have a page instead of blog index.
For this, first we moved *source/index.html* to *source/blog/index.html*. Then, created a markdown where we wrote what is to be there in homepage.
We put all such kinds of markdown inside *_partial* folder.
Then, in *source/index.html* we got rid of all exsiting code with

{% highlight html linenos %}
  ---
  layout: default
  ---
  <div id="page_about"/>
    {{ "{% render_partial _partial/about.markdown" }} %}
  </div>
{% endhighlight %}

This way about.markdown will be rendered in root page while blog index will be available at */blog*.

Now we had to put a list of developers and advisors info in members page. One way was to dump those info to a yml file and access data from there. Matt Swanson has excellent write on how to do that in his [blog](http://mdswanson.com/blog/2013/06/03/jekyll-201.html){:.rnw-link}. With this, we could dump the data from yml file to jekyll *site* variable.

Finally, we built a small heroku app that powers the join page forms and we have rubynepal.org as how it is now.
