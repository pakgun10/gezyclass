/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_808513361")

  // update collection data
  unmarshal({
    "createRule": null,
    "listRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_808513361")

  // update collection data
  unmarshal({
    "createRule": "1=1",
    "listRule": "1=1",
    "viewRule": "1=1"
  }, collection)

  return app.save(collection)
})
