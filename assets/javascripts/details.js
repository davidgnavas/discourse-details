/*
function details(text) {
  //Expression to find.
  var re = /\[details "(.*)"]\s*(.*)\s*\[\/details]/;
  // Adjust text.
  var adjusted = text.replace(re, "<details><summary>" + "$1" + "</summary>" + "$2" + "</details>");

  return adjusted;
}
*/

/*
Discourse.Dialect.postProcessText(function (text) {
  var textBlock = "";
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      textBlock = textBlock + text[i];
      //text[i] = details(text[i]);
    }
  }
  replaceDetails(textBlock);
  return text;
});
*/
/*
Discourse.Dialect.replaceBlock({
  start: '[details]',
  stop: '[/details]',
  rawContents: false,

  emitter: function(blockContents) {
    return ['details'].concat(blockContents.join("\n"));
  }
});
*/
replaceBBCode('details', function(contents) { return ['details'].concat(contents.join("\n")); });
