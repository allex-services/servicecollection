function createServiceSink(execlib,ParentSink){
  /*
  var dataSuite = execlib.dataSuite,
    DataStreamDecoder = dataSuite.DataStreamDecoder,
    MemoryStorage = dataSuite.MemoryStorage;
  */

  if(!ParentSink){
    ParentSink = execlib.execSuite.ServicePack.SinkMap.get('user');
  }

  function ServiceSink(prophash,client){
    ParentSink.call(this,prophash,client);
  }
  ParentSink.inherit(ServiceSink,require('../methoddescriptors/serviceuser'),require('../visiblefields/serviceuser'));
  ServiceSink.prototype.createStateFilter = function(){
    //TODO: create your filter here
    return null;
  };
  ServiceSink.prototype.createDataFilter = function(){
    var ret = new DataStreamDecoder(this.extendTo(new MemoryStorage()));
    console.log('creating data filter',ret);
    return ret;
    //return new DataStreamDecoder
  };
  return ServiceSink;
}

module.exports = createServiceSink;
