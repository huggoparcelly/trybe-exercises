db.xmen.updateMany(
  {$or: [{class: "omega"}, {class: "gama"}]},
  {$max: {power: 500}}
)