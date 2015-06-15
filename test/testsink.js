function createSinkConsumer(execlib){
  'use strict';
  function SinkConsumer(){
    this.sink = null;
  }
  SinkConsumer.prototype.destroy = function(){
    this.sink.destroy();
    this.sink = null;
  };
  SinkConsumer.prototype.takeSink = function(sink){
    this.sink = sink;
    this.sink.consumeChannel('s',this.onState.bind(this));
    this.sink.consumeChannel('d',this.onData.bind(this));
  };
  SinkConsumer.prototype.onState = function(item){
    console.log('state',item);
  };
  SinkConsumer.prototype.onData = function(item){
    console.log('data',item);
  };
  return SinkConsumer;
}

module.exports = createSinkConsumer;
