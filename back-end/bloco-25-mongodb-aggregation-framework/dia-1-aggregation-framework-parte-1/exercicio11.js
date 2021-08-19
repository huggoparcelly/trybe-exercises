db.vendas.aggregate(
  [
    {
      $match: 
      {
        status: {$in: ["EM SEPARACAO", "ENTREGUE"]},
        dataVenda: 
        {
          $gt: ISODate("2020-01-01"),
          $lt: ISODate("2020-03-31")
        }
      }
    },
    {
      $group:
      {
        _id: "$clienteId",
        quantCompras: {$sum: 1}
      }
    },
    {
      $match: {quantCompras: {$lt: 3}}
    },
    {
      $count: "clientes"
    }
  ]
)