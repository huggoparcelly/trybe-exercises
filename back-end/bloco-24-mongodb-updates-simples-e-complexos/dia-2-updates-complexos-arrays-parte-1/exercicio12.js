db.movies.updateOne(
  {title: "Batman", "cast.character": "Batman"},
  {$push: {
    "cast.$.actor": {
      $each: [
        "Michael Keaton",
        "Val Kilmer",
        "George Clooner"
      ],
      $sort: 1,
    }
  }})