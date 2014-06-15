function details(text) {
  //Expression to find.
  var re = /\[details "(.*)"]\s*(.*)\s*\[\/details]/;
  // Adjust text.
  var adjusted = text.replace(re, "<details><summary>" + "$1" + "</summary>" + "$2" + "</details>");

  return adjusted;
}

      replaceBBCodeParams("expand", function(param, contents) { 
        return ['details', ['summary', this.processInline(param)]].concat(contents); 
      }, false);

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    //if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = details(text[i]);
    //}
  }
  return text;
});
