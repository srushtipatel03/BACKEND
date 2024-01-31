// db.Students.aggregate([
//     {
//         $lookup: {
//               from: "Teacher",
//               localField: "Teacher",
//               foreignField: "name",
//               as: "Teacher"
//              }
//     }
//     ])
    
db.Students.aggregate([
{
    $lookup: {
          from: "Teacher",
          localField: "Teacher",
          foreignField: "name",
          as: "Teacher"
         }
},
{$unwind: "$Teacher"}
]