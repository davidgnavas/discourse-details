var tag = "details";

(function () {
  
    Discourse.Dialect.inlineBetween({
        start: "[" + tag + "=",
        stop:  "[/" + tag + "]",
        rawContents: true,
        emitter: function(contents) {
            var matches = contents.match(/(.+)]([\s\S]*)/);
            if (matches) return ['details', ['summary', ''].concat(this.processInline(matches[1]))].concat(this.processInline(matches[2]));
        }
    });

}).call(this);
