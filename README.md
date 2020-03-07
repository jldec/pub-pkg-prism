---- / ----
name: README

# pub-pkg-prism

[pub-server](https://github.com/jldec/pub-server) plugin for syntax highlighting with [prism.js](https://github.com/LeaVerou/prism.git).

Runs inside pub-generator during markdown processing -- no client-side javascript required.

Includes language support for the prism defaults HTML/XML, css, c-like, as well as

- Markup
- JavaScript
- C
- C#
- Cpp
- Clojure
- Docker
- F#
- Go
- Haskell
- Json
- Lua
- Makefile
- Perl
- Python
- R
- Rust
- Sql
- Swift
- WASM

A website with some examples can be found at https://jldec.github.io/pub-pkg-prism

### installation

This package is included with pub-server.

To enable it, add `pub-pkg-prism` to your pub-config `pkgs`.

Markdown code blocks will be automatically highlighted by pub-generator using [marked](https://marked.js.org/#/USING_ADVANCED.md#options), synchronously calling prism.hightlight().

## CSS

This package will inject `/css/prism.css` into your main template provided it includes `{{{injectCss}}}`.

### credits

Based on [prism.js](https://github.com/LeaVerou/prism.git) by Lea Verou - https://github.com/LeaVerou
