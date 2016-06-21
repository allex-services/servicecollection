function createServicePack(execlib){
  'use strict';

  return {
    service: {
      dependencies: ['allex:servicecontainer']
    },
    sinkmap: {
      dependencies: ['allex:servicecontainer']
    }
  };
}

module.exports = createServicePack;
