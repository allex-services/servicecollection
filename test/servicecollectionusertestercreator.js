function createServicecollectionUserTester(execlib,Tester){
  var lib = execlib.lib,
      q = lib.q,
      execSuite = execlib.execSuite,
      ServiceSink = execSuite.ServiceSink;

  function ServicecollectionUserTester(prophash,client){
    Tester.call(this,prophash,client);
    this.attempts = 10;
    lib.runNext(this.doDaDo.bind(this,0));
  }
  lib.inherit(ServicecollectionUserTester,Tester);
  ServicecollectionUserTester.prototype.doDaDo = function(){
    this.subConnect('Time',{},ServiceSink).done(function(){
      console.log('UserTester connected',arguments);
    },this.onSubConnectFailed.bind(this));
  };
  ServicecollectionUserTester.prototype.onSubConnectFailed = function(){
    this.attempts--;
    if(this.attempts){
      this.doDaDo();
    }else{
      this.fail('No Subconnect to Time');
    }
  };

  return ServicecollectionUserTester;
}

module.exports = createServicecollectionUserTester;
