function createServicePack(execlib){
  var execSuite = execlib.execSuite;
  DataServicePack = require('allex_dataservice')(execlib),
  ParentServicePack = DataServicePack;
  return {
    Service: require('./servicecreator')(execlib,ParentServicePack),
    SinkMap: require('./sinkmapcreator')(execlib,ParentServicePack)
  };
}

module.exports = createServicePack;
