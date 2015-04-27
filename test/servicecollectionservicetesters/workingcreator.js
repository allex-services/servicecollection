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
      name:'Time',
      modulepath: __dirname+'/../../node_modules/hers_execmill/test/services/time'
    }).done(
      this.onSucess.bind(this),
      this.fail.bind(this)
    );
  };
  ServicecollectionServiceTester.prototype.onSucess = function(){
    console.log('Succesfully instantiated',arguments);
    this.finish(1);
  };

  return ServicecollectionServiceTester;
}

module.exports = createServicecollectionServiceTester;
