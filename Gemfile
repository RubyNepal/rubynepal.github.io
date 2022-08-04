# frozen_string_literal: true

source 'https://rubygems.org'

ruby File.read('.ruby-version').strip.split('-').last

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem 'jekyll', '~> 4.2'
gem 'rake', '~> 13.0'
gem 'webrick', '~> 1.7'

gem 'match_regex', '~> 0.1'
gem 'replace_regex', '~> 0.1'
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
# Performance-booster for watching directories on Windows
gem 'wdm' if Gem.win_platform?

# If you want to use GitHub Pages, remove the 'gem 'jekyll'' above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem 'github-pages', group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'jekyll-admin', '~> 0.11'
  gem 'jekyll-analytics', '~> 0.1'
  # gem 'jekyll-autolink_email', '~> 0.1'
  gem 'jekyll-avatar', '~> 0.8'
  gem 'jekyll-email-protect', '~> 1.1'
  gem 'jekyll-feed', '~> 0.16'
  gem 'jekyll-paginate', '~> 1.1'
  gem 'jekyll-seo-tag', '~> 2.8'
  gem 'jekyll-twitter-plugin', '~> 2.1'
  gem 'jekyll-youtube', '~> 1.0'
end

group :development, :test do
  gem 'colorize', '~> 0.8', require: false
  gem 'html-proofer', '~> 4.2'
  gem 'jshint-rb', '~> 1.1', require: false
  gem 'parallel', '~> 1.22'
  gem 'rubocop', '~> 1.33', require: false
  gem 'rubocop-performance', '~> 1.14', require: false
  gem 'scss_lint', '~> 0.59', require: false

  gem 'guard-bundler', '~> 3.0', require: false
  gem 'guard-bundler-audit', '~> 0.1'
  gem 'guard-rake', '~> 1.0'
  gem 'guard-rubocop', '~> 1.5'
  gem 'guard-shell', '~> 0.7'
end
