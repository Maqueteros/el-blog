# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# This will concatenate the javascript files specified in :files to public/js/all.js
#guard :concat, type: "js", files: %w(), input_dir: "public/js", output: "public/js/all"

#guard :concat, type: "css", files: %w(), input_dir: "public/css", output: "public/css/all"

# This is an example with all options that you can specify for guard-process
#guard 'process', :name => 'name of your process', :command => 'ruby path/to/your/file.rb', :env => #{"ENV1" => "value 1", "ENV2" => "value 2"}, :stop_signal => "KILL"  do
#  watch('Gemfile.lock')
#end


guard 'sass', :input => 'sass', :output => 'css'

#guard 'uglify', :destination_file => "public/javascripts/application.js" do
#  watch (%r{app/assets/javascripts/application.js})
#end

guard 'livereload' do
  watch(%r{.+\.(css|js|html)$})
end
