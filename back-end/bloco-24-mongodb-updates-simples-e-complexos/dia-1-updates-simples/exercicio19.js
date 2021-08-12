db.xmen.updateMany(
  {$and: [
    {power: {$gt: 100, $gt:200}}]},
  {$set: {areas: ["Students Room"]}}
)