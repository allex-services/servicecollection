function createService(execlib,ParentServicePack){
  var ParentService = ParentServicePack.Service,
    dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory){
    return {
      'service': require('./users/serviceusercreator')(execlib,parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib,parentFactory.get('user')) 
    };
  }

  function Service(prophash){
    ParentService.call(this,prophash);
    if(!prophash.modulename){
      throw "No properyhash.modulename for ServiceCollectionService";
    }
  }
  ParentService.inherit(Service,factoryCreator,require('./storagedescriptor'));
  Service.prototype.__cleanUp = function(){
    ParentService.prototype.__cleanUp.call(this);
  };
  Service.prototype.createStorage = function(storagedescriptor){
    return ParentService.prototype.createStorage.call(this,storagedescriptor);
  };
  return Service;
}

module.exports = createService;
