(function () {
  
    Discourse.Dialect.inlineBetween({
        start: "[hide=",
        stop:  "[/hide]",
        rawContents: true,
        emitter: function(contents) {
            var matches = contents.match(/(.+)]([\s\S]*)/);
            if (matches) return ['details', ['summary', matches[1]]].concat(this.processInline(matches[2]));
        }
    });

}).call(this);
