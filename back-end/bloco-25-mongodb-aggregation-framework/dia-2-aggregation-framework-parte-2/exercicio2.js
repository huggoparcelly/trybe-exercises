db.clientes.aggregate(
  [
    {
      $addFields: 
      {
        idade: 
        {
          $floor: 
          {
            $divide: [
              {$subtract: [new Date(), "$dataNascimento"]},
              {$multiply: [365, 86400000]}
            ]
          }
        }
      }
    },
    {$match: {idade: {$gte: 18, $lte: 25}}},
    {$count: "clientes"}
  ]
)