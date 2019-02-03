# pub-pkg-prism

[pub-server](https://github.com/jldec/pub-server) plugin for syntax highlighting with [prism.js](https://github.com/LeaVerou/prism.git).

Runs inside pub-generator during markdown processing -- no client-side javascript required.

Includes language support for the prism defaults HTML/XML, css, c-like, as well as the following:

- JavasSript
- C
- Bash
- Cpp
- Clojure
- Ruby
- Docker
- Markup-templating
- Go
- Handlebars
- Java
- Markdown
- Lua
- Makefile
- PHP
- Powershell
- Protobuf
- Python
- R
- JSX
- Rust
- Swift

A website with some examples can be found at https://jldec.github.io/pub-pkg-prism

### installation

This package is included with pub-server.

To enable it, add `pub-pkg-prism` to your pub-config `pkgs`.

Markdown code blocks will be automatically highlighted by pub-generator using [marked](https://marked.js.org/#/USING_ADVANCED.md#options), synchronously calling prism.hightlight().

## CSS

This package will inject `/css/prism.css` into your main template provided it includes `{{{injectCss}}}`.

### credits

Based on [prism.js](https://github.com/LeaVerou/prism.git) by Lea Verou - https://github.com/LeaVerou
