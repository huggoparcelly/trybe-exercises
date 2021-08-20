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
      $addFields: 
      {
        totalCompras: {$size: "$compras"}
      }
    },
    {
      $sort: {totalCompras: -1}
    },
    {
      $limit: 10
    },
    {
      $project: 
      {
        _id: 0,
        "endereco.uf": 1,
        totalCompras: 1
      }
    }
  ]
)