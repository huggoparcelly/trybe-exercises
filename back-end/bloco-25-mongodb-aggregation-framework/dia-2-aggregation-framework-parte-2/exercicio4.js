db.clientes.aggregate(
  [
    {
      $lookup:
      {
        from: "vendas",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "compras"
      }
    },
    {
      $match:
      {
        "compras.dataVenda": 
        {
          $gte: ISODate("2019-06-01"),
          $lte: ISODate("2020-03-31")
        }
      }
    },
    {
      $project:
      {
        _id: 0,
        nome: 1,
      }
    }
  ]
)