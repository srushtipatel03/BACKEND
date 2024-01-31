// db.Students.insertOne({
//         Name: "srushti",
//         Surname: "patel",
//         Gender: "Female",
//         Age: 20,
//         Email : "ss11@gmail.com",
//         Teacher: "girish sir"
//     });

//  db.Students.insertMany([
//     {
//         Name: "Krish",
//         Surname: "Ranghani",
//         Gender: "Male",
//         Age: 18,
//         Email : "krish@test.in",
//         Teacher: "vivek sir"
//     },

//         {
//             Name: "Jenil",
//             Surname: "Kakadiya",
//             Gender: "Male",
//             Age: 19,
//             Email : "jk@test.in",
//             Teacher: "girish sir",
//             Subjects :{
//                 Maths :69,
//                 Science :65,
//                 English :42
//             }
//         },    

//     {
//         Name: "Monika",
//         Surname: "Kathiriya",
//         Gender: "FeMale",
//         Age: 19,
//         Email : "mk23@test.in",
//         Teacher: "nikunj sir",
//         Subjects :{
//             Maths :78,
//             Science :70,
//             English :92
//         }
//     },    
//     ]);

// db.Students.find();

// db.Teacher.insertMany([
//     {
//         name: "girish sir",
//         course: "backend-development"
//     },
//     {
//         name: "vivek sir",
//         course: "frontend-development"
//     },
//     {
//         name: "nikunj sir",
//         course: "UI/UX Design"
//     },
//     {
//         name: "kuldeep sir",
//         course: "Mobile-development"
//     }
//     ]);
db.Teacher.find()
// db.Teacher.deleteMany({"name":'vivek'});