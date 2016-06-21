function createService(execlib,ParentService){
  'use strict';
  var dataSuite = execlib.dataSuite,
    execSuite = execlib.execSuite,
    registry = execSuite.registry;

  function factoryCreator(parentFactory){
    return {
      'service': require('./users/serviceusercreator')(execlib,parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib,parentFactory.get('user')) 
    };
  }

  function Service(prophash){
    ParentService.call(this,prophash);
    if(!prophash.modulename){
      throw "No propertyhash.modulename for ServiceCollectionService";
    }
    registry.registerServerSide(prophash.modulename);
    this.submodulename = prophash.modulename;
    this.global = prophash.global || true; //globalregistration of subServices by default
  }
  ParentService.inherit(Service,factoryCreator,require('./storagedescriptor'));
  Service.prototype.__cleanUp = function(){
    this.submodulename = null;
    this.global = null;
    ParentService.prototype.__cleanUp.call(this);
  };
  Service.prototype.createStorage = function(storagedescriptor){
    return ParentService.prototype.createStorage.call(this,storagedescriptor);
  };
  return Service;
}

module.exports = createService;
