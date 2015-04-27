var execlib=require('hers_exectesting')();

execlib.test({
  debug_brk: false,
  debug: false,
  name:'ServiceCollection',
  modulepath:'./index.js',
  propertyhash: {
  }
},{
  timeout: 15000,
  debug_brk: false,
  debug: false,
  tests:[
  {
    count:1,
    role: 'service',
    tester:{
      count:1,
      modulepath:'./test/servicecollectionservicetesters/nomodulepathcreator',
      propertyhash:{
      }
    }
  },
  {
    count:1,
    role: 'service',
    tester:{
      count:1,
      modulepath:'./test/servicecollectionservicetesters/wrongmodulepathcreator',
      propertyhash:{
      }
    }
  },
  {
    count:1,
    role: 'service',
    tester:{
      count:1,
      modulepath:'./test/servicecollectionservicetesters/workingcreator',
      propertyhash:{
      }
    }
  },
  {
    count:2,
    role: 'user',
    tester:{
      count:2,
      modulepath:'./test/servicecollectionusertestercreator',
      propertyhash:{
      }
    }
  } 
  ]
});

