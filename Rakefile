# frozen_string_literal: true

require 'bundler/setup'
require 'colorize'
require 'html-proofer'
require 'jekyll'
require 'rake'
require 'rubocop/rake_task'
require 'uri'
require 'scss_lint/rake_task'
require 'jekyll-youtube'
require 'jshint'
require 'jshint/tasks'

# Configuration Options
config_file = '_config.yml' # Name of Jekyll config file

# Standard tasks
# [:rubocop, 'jshint', :html_proofer]
multitask default: %i[jshint html_proofer]

# Rubocop Rake
desc 'Run RuboCop on the lib directory'
RuboCop::RakeTask.new(:rubocop) do |task|
  task.requires.push(
    'rubocop-performance'
  )
  task.options = ['--display-cop-names', '.']
  task.patterns = ['**/*.rb']
  # only show the files with failures
  task.formatters = ['files']
  # abort rake on failure
  task.fail_on_error = true
end

# https://github.com/brigade/scss-lint#rake-integration
SCSSLint::RakeTask.new
# SCSSLint::RakeTask.new do |t|
#   t.config = '.scss-lint.yml'
#   # t.args = ['--format', 'JSON', '--out', 'results.txt']
#   t.args = ['--exclude', 'css/*.scss']
#   t.files = Dir.glob(['_sass/**/*.scss'])
# end

# https://github.com/josephholsten/jshint.rb#running-from-your-code
JSHint.config_path = "config/lint.yml"
# namespace :js do
#   lint = JSHint::Lint.new(
#     :paths => ['js/**/*.js'],
#     :exclude_paths => ['bundle/**/*.js', '_site/js/**/*.js', '_site/bundle/**/*.js'],
#     :config_path => 'config/jslint.yml'
#   )
#
#   lint.run
# end

# https://github.com/whoward/jslint-v8#rake-task
# namespace :js do
#   JSLintV8::RakeTask.new do |task|
#     task.name = "lint"
#     task.description = "runs jslint against all important javascript files"

#     task.output_stream = STDOUT

#     task.include_pattern = "js/**/*.js"
#     task.exclude_pattern = "_site/js/**/*.js"

#     # pass boolean options to jshint like this, these are merged with the default options
#     task.jquery  = true  # predefine jQuery globals
#     task.browser = true  # predefine Browser globals
#     task.bitwise = false # allow bitwise operators to be used

#     # or just access the options hash directly, be sure to use strings for keys
#     # task.lint_options["strict"] = true
#   end
# end

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

desc "Test the website"
task :html_proofer => [:build] do
  # Rake::Task['build'].invoke
  puts "⚡️  Checking HTML".blue
  host_regex = Regexp.new(site_domain(config_file))
  options = {
    allow_hash_href: true,
    assume_extension: true,
    cache: {
      timeframe: '6w'
    },
    check_external_hash: true,
    check_favicon: true,
    check_html: true,
    check_img_http: true,
    check_opengraph: true,
    check_sri: false,
    disable_external: true,
    enforce_https: true,
    in_processes: 3,
    report_eof_tags: true,
    report_invalid_tags: true,
    report_mismatched_tags: true,
    report_missing_doctype: true,
    url_ignore: [host_regex]
  }
  begin
    puts "Running html proofer...".yellow.bold
    HTMLProofer.check_directory("./_site", options).run
  rescue => msg
    puts "#{msg}"
  end
end

# Misc Methods
def site_domain(config_file)
  URI(fetch_jekyll_config(config_file)['url']).host
end

def fetch_jekyll_config(config_file)
  site = Jekyll::Configuration.new
  site.read_config_file(config_file)
end
