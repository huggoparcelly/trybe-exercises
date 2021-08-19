db.clientes.aggregate(
  [
    { 
      $match: 
      {
        sexo: "FEMININO",
        dataNascimento: 
        {
          $gt: ISODate("1995-01-01"), 
          $lt: ISODate("2005-12-31")
        }
      }
    },
    {
      $limit: 5
    }
  ]
);