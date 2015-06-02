# ServiceCollectionService
This is a specialization of [ServiceContainerService](../../../servicecontainer).
It needs a `modulename` field in its construction propertyhash.
The module specified by the `modulename` field will be used to instantiate all contained sub-Services.
The `spawn` method of the `service` User will need a propertyhash for the new sub-Service.
The `propertyhash` for `service` User's `spawn` __must__ contain a `name` field. That `name` field will declare the name of the sub-Service under which it will be mapped in the `subservices` map of the ServiceCollectionService instance.