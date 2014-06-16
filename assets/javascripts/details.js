/*
function details(text) {
  //Expression to find.
  var re = /\[details "(.*)"]\s*(.*)\s*\[\/details]/;
  // Adjust text.
  var adjusted = text.replace(re, "<details><summary>" + "$1" + "</summary>" + "$2" + "</details>");

  return adjusted;
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    //if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = details(text[i]);
    //}
  }
  return text;
});
*/

/*
Discourse.Dialect.inlineReplace('[details]', function (text) {
    return ['details', {src: 'text'}];
});
*/

Discourse.Dialect.inlineBetween({
    start: "[details]",
    stop: "[/details]",
    rawContents: false,
    emitter: function (contents) {
        return '<details><summary>Test</summary>' + contents + '</details>';
    }
});
