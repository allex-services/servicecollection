function createServiceUser(execlib,ParentUser){
  'use strict';
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
  ServiceUser.prototype.acquireSink = function(spawnrecord, spawndescriptor){
    if(!this.__service.submodulename){
      return q.reject(new lib.Error('SERVICE_DOWN'));
    }
    return execSuite.start({
      service:{
        modulename: this.__service.submodulename,
        instancename: this.__service.global ? spawnrecord.instancename : null,
        propertyhash: spawnrecord
      }
    });
  };

  return ServiceUser;
}

module.exports = createServiceUser;
