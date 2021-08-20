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
    {
      $lookup:
      {
        from: "vendas",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "compras"
      }
    }
  ]
)