function createServiceUser(execlib,ParentUser){
  var execSuite = execlib.execSuite;

  if(!ParentUser){
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }

  function ServiceUser(prophash){
    ParentUser.call(this,prophash);
  }
  ParentUser.inherit(ServiceUser,require('../methoddescriptors/serviceuser'),[],require('../visiblefields/serviceuser'));
  ServiceUser.prototype.__cleanUp = function(){
    ParentUser.prototype.__cleanUp.call(this);
  };
  ServiceUser.prototype.acquireSink = function(spawndescriptor,defer){
    if(!this.__service.submodulename){
      defer.reject('Service is down');
    }
    execSuite.start({
      service:{
        modulename: this.__service.submodulename,
        instancename: this.__service.global ? spawndescriptor.instancename : null,
        propertyhash: spawndescriptor
      }
    }).done(
      defer.resolve.bind(defer),
      defer.reject.bind(defer),
      defer.notify.bind(defer)
    );
  };

  return ServiceUser;
}

module.exports = createServiceUser;
