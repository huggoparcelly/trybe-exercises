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
        as: "infoClientes"
      }
    },
    {
      $unwind: "$infoClientes"
    },
    {
      $group: 
      {
        _id: "$infoClientes.endereco.uf",
        quantCompras: {$sum: 1}
      }
    },
    {$sort: {quantCompras: -1}},
    {$limit: 3},
    {$project: {_id: 0, totalVendas: "$quantCompras", uf: "$_id"}}
    
  ]
)
