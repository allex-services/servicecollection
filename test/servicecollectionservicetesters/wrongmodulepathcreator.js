function createServicecollectionServiceTester(execlib,Tester){
  var lib = execlib.lib,
      q = lib.q;

  function ServicecollectionServiceTester(prophash,client){
    console.log('ServicecollectionServiceTester!');
    Tester.call(this,prophash,client);
    console.log('runNext finish');
    lib.runNext(this.doInstantiateService.bind(this));
  }
  lib.inherit(ServicecollectionServiceTester,Tester);
  ServicecollectionServiceTester.prototype.doInstantiateService = function(){
    this.call('instantiateService',{
      name:'blah'+~~(2+Math.random()*15),
      modulepath: 'njah'
    }).done(
      this.finish.bind(this,1),
      this.failExpected.bind(this)
    );
  };
  ServicecollectionServiceTester.prototype.failExpected = function(reason){
    console.log('Got the error, as expected:',reason);
    this.finish(1);
  };

  return ServicecollectionServiceTester;
}

module.exports = createServicecollectionServiceTester;
