/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2442683504")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": "",
    "updateRule": null,
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2442683504")

  // update collection data
  unmarshal({
    "createRule": "1=1",
    "deleteRule": "1=1",
    "listRule": "@request.auth.id = \"\"",
    "updateRule": "1=1",
    "viewRule": "@request.auth.id = \"\""
  }, collection)

  return app.save(collection)
})
