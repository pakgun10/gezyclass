/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_808513361")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_808513361")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": "1=1",
    "updateRule": "1=1"
  }, collection)

  return app.save(collection)
})
