function createServiceCollectionService(execlib,ParentServicePack){
  var ParentService = ParentServicePack.Service,
    dataSuite = execlib.dataSuite,
    MemoryStorage = dataSuite.MemoryStorage;

  function factoryCreator(parentFactory){
    return {
      'service': require('./users/serviceusercreator')(execlib,parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib,parentFactory.get('user')) 
    };
  }

  function ServiceCollectionService(prophash){
    ParentService.call(this,prophash);
  }
  ParentService.inherit(ServiceCollectionService,factoryCreator,require('./recorddescriptor'));
  ServiceCollectionService.prototype.createStorage = function(){
    return new MemoryStorage;
  };
  return ServiceCollectionService;
}

module.exports = createServiceCollectionService;
