# pub-pkg-prism

[pub-server](https://github.com/jldec/pub-server) plugin for syntax highlighting with [prism.js](https://github.com/LeaVerou/prism.git).

Runs inside pub-generator during markdown processing -- no client-side javascript required.

### installation

1. `npm install --save pub-pkg-prism`
2. add `pub-pkg-prism` to your pub-config `pkgs`

### usage

Markdown code blocks will be automatically highlighted by pub-generator using [marked](https://github.com/chjj/marked#options-1), synchronously calling prism.hightlight().

## CSS

This package will inject `/css/prism.css` into your main template.

### credits

Based on [prism.js](https://github.com/LeaVerou/prism.git) by Lea Verou - https://github.com/LeaVerou
