/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("exams")

  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool8912345678",
    "name": "survey_mode",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("exams")

  collection.fields.remove("survey_mode")

  return app.save(collection)
})
