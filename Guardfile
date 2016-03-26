coffeescript_options = {
  bare: true,
  input: 'coffeescripts',
  output: 'javascripts',
  patterns: [%r{^coffeescripts/(.+\.(?:coffee|coffee\.md|litcoffee))$}]
}

guard 'coffeescript', coffeescript_options do
  coffeescript_options[:patterns].each { |pattern| watch(pattern) }
end
