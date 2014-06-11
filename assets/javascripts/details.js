function details(text) {
  return text.replace("[detail]", "<details>")
             .replace("[summary]", "<summary>")
             .replace("[/summary]", "</summary>")
             .replace("[/detail]", "</details>");
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
