function details(text) {
  //if (text.indexOf("[details") > -1) {
      var adjusted = "<details><summary>"
    + text.replace(/.*\[details "(.*)"]\s*(.*)\s*\[\/details]/, "$1")
    + "</summary>"
    + text.replace(/.*\[details "(.*)"]\s*(.*)\s*\[\/details]/, "$2")
    + "</details>";
  //}

  // Remove all types of newlines   
  //adjusted.replace(/(\r\n|\n|\r)/gm, " ");  
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
