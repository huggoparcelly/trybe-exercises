db.movies.find(
  {
    ratings: {$size: 4},
    category: {$in: ["adventure", "family"]},
    imdbRating: {$gte: 7}
  }
)
