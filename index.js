function createServicePack(execlib){
  var execSuite = execlib.execSuite;
  servicecontainerServicePack = execSuite.registry.register('allex_servicecontainerservice'),
  ParentServicePack = servicecontainerServicePack;

  return {
    Service: require('./servicecreator')(execlib,ParentServicePack),
    SinkMap: require('./sinkmapcreator')(execlib,ParentServicePack)
  };
}

module.exports = createServicePack;
