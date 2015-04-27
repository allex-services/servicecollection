function createServiceUser(execlib,ParentUser){

  if(!ParentUser){
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }

  function ServiceUser(prophash){
    ParentUser.call(this,prophash);
  }
  ParentUser.inherit(ServiceUser,require('../methoddescriptors/serviceuser'),require('../visiblefields/serviceuser'));
  ServiceUser.prototype.instantiateService = function(servicedesc,defer){
    defer.promise.then(this.onServicePackInstantiated2.bind(this,servicedesc));
    ParentUser.prototype.instantiateService.call(this,servicedesc,defer);
  };
  ServiceUser.prototype.onServicePackInstantiated2 = function(servicedesc){
    console.log('ServiceCollection instantiated',arguments);
    console.log(this.__service.record);
    var record = {};
    this.__service.record.extractFromTo(servicedesc,record);
    this.__service.record.extractFromTo(servicedesc.prophash,record);
    console.log('And the record is:',record);
    this.__service.data.create(record);
  };

  return ServiceUser;
}

module.exports = createServiceUser;
