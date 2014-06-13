function details(text) {
  var re = /\[head:([a-zA-Z0-9]+)]/;
  var adjusted = text.replace(re, "<details><summary>" + "$1" + "</summary>" + "$2" + "</details>");

 return adjusted;
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = details(text[i]);
    }
  }
  return text;
});
