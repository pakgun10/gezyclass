/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1052100378")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.collection.name = 'guru'",
    "viewRule": "@request.auth.collection.name = 'guru'"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1052100378")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
