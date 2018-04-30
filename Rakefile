# frozen_string_literal: true

require 'bundler/setup'
require 'colorize'
require 'html-proofer'
require 'jekyll'
require 'rubocop/rake_task'
require 'uri'
require 'jekyll-youtube'

# Configuration Options
config_file = '_config.yml' # Name of Jekyll config file

# Rubocop Rake
RuboCop::RakeTask.new(:rubocop) do |t|
  t.options = ['--display-cop-names', '.']
end

# Extend string to allow for bold text.
class String
  def bold
    "\033[1m#{self}\033[0m"
  end
end

# Rake Jekyll tasks
task :build do
  puts 'Building site...'.yellow.bold
  Jekyll::Commands::Build.process(profile: true)
end

task :clean do
  puts 'Cleaning up _site...'.yellow.bold
  Jekyll::Commands::Clean.process({})
end

task :html_proofer do
  Rake::Task['build'].invoke
  host_regex = Regexp.new(site_domain(config_file))
  puts 'Running html proofer...'.yellow.bold
  HTMLProofer.check_directory('./_site', allow_hash_href: true,
                                         url_ignore: [host_regex],
                                         assume_extension: true).run
end

# Misc Methods
def site_domain(config_file)
  URI(fetch_jekyll_config(config_file)['url']).host
end

def fetch_jekyll_config(config_file)
  site = Jekyll::Configuration.new
  site.read_config_file(config_file)
end
