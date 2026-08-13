/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1002227344")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.collectionName = 'guru'",
    "viewRule": "@request.auth.collectionName = 'guru'"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1002227344")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.collection.name = 'guru'",
    "viewRule": "@request.auth.collection.name = 'guru'"
  }, collection)

  return app.save(collection)
})
