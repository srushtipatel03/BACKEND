/*
MongoDB Agrigation
1. $match     2. $project   3. $limit     4. $skip  
5. $count     6. $sort      7. $group     8. $lookup
9. $unwind
*/

//1=Ascending -1=Descending 

// db.books.find()
// db.books.find({"pages" :{$lte:209}})

// db.books.aggregate([
//     {$match: {"pages":{$lte:209},"country" : "Nigeria"}}
//     ])
    
    
// db.books.find({},{author:1, country:1, pages:1, _id:0})
// db.books.find({}).projection({author:1, country:1, pages:1, _id:0})

// db.books.aggregate([
//     {$match: {"pages":{$lte:209},"language": "English"}},
//     {$project: {author:1, country:1,_id:1} }
//     ])
       
       
// db.books.find().limit(5)

// db.books.aggregate([
//      {$match: {"pages":{$lte:209}}},
//      {$project: {author:1, country:1} },
//     {$limit: 5}
//     ])


// db.books.find().select({author:1, country:1}).skip(50).limit(5)       //skip 50 and show from 56to60

// db.books.aggregate([
//     {$skip: 5}
//     ])                    //skip from front

// db.books.find({"pages":{$lte:209}}).count()
// db.books.aggregate([
//     {$match: {"pages":{$lte:209}}},
//     {$count : "Total Count" }
//     ])
   
   
// db.books.find({"pages":{$lte:209}}).sort({pages:1, author:-1})
// db.books.aggregate([
//     {$sort : {author:-1}}
//     ])


// db.books.aggregate([
//     {
//       $group: { _id: "$language", total: {$sum:1}},
//     }
//     ])

// db.books.aggregate([
//     {
//       $group: { _id: {language: "$language",author: "$author"}, total: {$sum:1}},
//     }
//     ])


    
    











