function createServicePack(execlib){
  'use strict';

  return {
    service: {
      dependencies: ['allex_servicecontainerservice']
    },
    sinkmap: {
      dependencies: ['allex_servicecontainerservice']
    }
  };
}

module.exports = createServicePack;
