guard :concat, type: "js", files: %w(libs/* m), input_dir: "public/app", output: "public/js/all"

guard 'sass', :input => 'public/sass', :output => 'public/css'


guard 'livereload' do
  watch(%r{.+\.(css|js|html)$})
end