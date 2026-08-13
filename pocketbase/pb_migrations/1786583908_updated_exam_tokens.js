/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2442683504")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool1137015140",
    "name": "is_shared",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2442683504")

  // remove field
  collection.fields.removeById("bool1137015140")

  return app.save(collection)
})
