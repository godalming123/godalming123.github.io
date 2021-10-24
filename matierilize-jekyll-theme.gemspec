% cat mat
Gem::Specification.new do |s|
  # what you see on the extension gem page
  s.name        = 'matirialize-jekyll-theme'
  s.version     = '0.0.0'
  s.authors     = ["Me"]
  s.email       = ''
  s.description = ""
  s.summary     = "A theme for jekyll using the matiarlize css"
  s.homepage    = ''
  s.license     = 'MIT'

  # stuff that gets passed on extension install
  s.files       = git ls-files -z.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  # runtime dependencys
  s.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"

  # dev dependencys
  spec.add_development_dependency "jekyll", "~> 3.3"
  spec.add_development_dependency "bundler", "~> 1.12"
end