db.vendas.aggregate(
  [
    {$match: 
      {
        status: {$in: ["EM SEPARACAO", "ENTREGUE"]},
        dataVenda: 
        {
          $gte: ISODate("2020-01-01"),
          $lte: ISODate("2020-12-31")
        }
      }
    },
    {
      $lookup:
      {
        from: "clientes",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "infoCliente"
      }
    },
    { $unwind: "$infoCliente"},
    {
      $group:
      {
        _id: "$infoCliente.endereco.uf",
        mediaVendas: {$avg: "$valorTotal"},
        totalVendas: {$sum: 1}
      }
    },
    {$sort: {_id: 1}}
  ]
)