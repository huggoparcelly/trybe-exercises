db.vendas.aggregate(
  [
    {
      $match: 
      {
        status: "EM SEPARACAO",
        dataVenda: 
        {
          $gte: ISODate("2020-03-01"), 
          $lte: ISODate("2020-03-31")
        }
      }
    },
    {
      $addFields:
      {
        dataEntregaPrevista:
        {
          $add: ["$dataVenda", 3*24*60*60*1000]
        }
      }
    },
    {
      $project:
      {
        _id: 0,
        clienteId: 1,
        dataVenda: 1,
        dataEntregaPrevista: 1
      }
    }
  ]
)