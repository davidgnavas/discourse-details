Discourse.Dialect.replaceBlock({
  start: /(\[summary\])([\s\S]*)/igm,
  stop: '[/summary]',

  emitter: function(blockContents) {
    return ['summary'].concat(this.processInline(blockContents));
  }
});
