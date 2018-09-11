# frozen_string_literal: true

source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.8"

gem "rake", "~> 12.3"
gem "match_regex", "~> 0.1"
gem "replace_regex", "~> 0.1"
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby] # Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "wdm" if Gem.win_platform? # Performance-booster for watching directories on Windows

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-admin", "~> 0.8"
  gem "jekyll-avatar", "~> 0.6"
  gem "jekyll-analytics", "~> 0.1"
  gem "jekyll-autolink_email", "~> 0.1"
  gem "jekyll-email-protect", "~> 1.1"
  gem "jekyll-feed", "~> 0.9"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-seo-tag", "~> 2.5"
  gem "jekyll-youtube", "~> 1.0"
  # https://github.com/rob-murray/jekyll-twitter-plugin
  gem "jekyll-twitter-plugin", "~> 2.0.0"
end

group :development, :test do
  gem "html-proofer", "~> 3.9"
  gem "jslint-v8", "~> 1.1"
  gem "parallel", "~> 1.12"
  gem "rubocop", "~> 0.56", require: false
  gem "scss_lint", "~> 0.57", require: false

  gem "guard-bundler", "~> 2.1", require: false
  gem "guard-bundler-audit", "~> 0.1"
  gem "guard-rake", "~> 1.0"
  gem "guard-rubocop", "~> 1.3"
end
