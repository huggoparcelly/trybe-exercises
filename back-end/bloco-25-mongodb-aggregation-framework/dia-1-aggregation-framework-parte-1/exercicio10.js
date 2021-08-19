db.vendas.aggregate(
  [
    {
      $match: {status: {$in: ["EM SEPARACAO", "ENTREGUE"]}}
    },
    {
      $group: 
      {
        _id: "$clienteId",
        quantidadeCompras: {$sum: 1}
      }
    },
    {
      $match: 
      {
        quantidadeCompras: {$gt: 5}
      }
    },
    {
      $count: "clientes"
    }
  ]
)

