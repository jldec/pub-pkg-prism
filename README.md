# pub-pkg-prism

[pub-server](https://github.com/jldec/pub-server) plugin for syntax highlighting with [prism.js](https://github.com/LeaVerou/prism.git).

Runs inside pub-generator during markdown processing -- no client-side javascript required.

Includes language support for the prism defaults HTML/XML, css, c-like, as well as the following:
- javascript
- c
- bash
- cpp
- clojure
- ruby
- docker
- markup-templating
- go
- handlebars
- java
- markdown
- lua
- makefile
- php
- powershell
- protobuf
- python
- r
- jsx
- rust
- swift

### installation

1. `npm install --save pub-pkg-prism`
2. add `pub-pkg-prism` to your pub-config `pkgs`

### usage

Markdown code blocks will be automatically highlighted by pub-generator using [marked](https://marked.js.org/#/USING_ADVANCED.md#options), synchronously calling prism.hightlight().

## CSS

This package will inject `/css/prism.css` into your main template.

### credits

Based on [prism.js](https://github.com/LeaVerou/prism.git) by Lea Verou - https://github.com/LeaVerou
