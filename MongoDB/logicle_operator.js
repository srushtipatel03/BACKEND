// Logicle operator

// db.books.find({ $and: [{"pages" : {$eq: 384}}, {"year" : 1350}]})

// db.books.find({ $or: [{"pages" : {$eq: 384}}, {"year" : {$in: [1315, 1836, 1958]}}]})

// db.books.find({ $nor: [{"pages" : {$eq: 384}}, {"year" : {$in: [1315, 1836, 1958]}}]})

// db.books.find({"pages" : {$not: {$lte: 384}}})