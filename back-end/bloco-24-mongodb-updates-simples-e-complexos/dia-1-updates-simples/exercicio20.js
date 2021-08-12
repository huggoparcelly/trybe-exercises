db.xmen.updateMany(
  {areas: {$exists: false}},
  {$set: {areas: ["Outside"]}}
)