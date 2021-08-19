db.vendas.aggregate(
  [
    {
      $match: 
      {
        status: {$in: ["EM SEPARACAO", "ENTREGUE"]},
        dataVenda: {$gt: ISODate("2019-01-01"), $lt: ISODate("2019-12-31")}
      }
    },
    {
      $group: 
      {
        _id: "$clienteId",
        valorTotal: {
          $sum: "$valorTotal"
        }
      }
    },
    {$sort: {valorTotal: -1}},
    {$limit: 10}
  ]
)

