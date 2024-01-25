// use srushti
// show dbs
// show collections

// db.collectionname.find()
// db.collectionname.drop

// db.creatCollection("user");

// insert one db.student.insertone({    });

db.Students.insertMany([
    {
        Name: "srushti",
        Surname: "patel",
        Gender: "Female",
        Age: 20,
        Email : "ss11@gmail.com",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :78,
            Science :60,
            English :92
        },
    },

    {
        Name: "Krish",
        Surname: "Ranghani",
        Gender: "Male",
        Age: 18,
        Email : "krish@test.in",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :68,
            Science :50,
            English :62
        }
        },

        {
            Name: "Jenil",
            Surname: "Kakadiya",
            Gender: "Male",
            Age: 19,
            Email : "jk@test.in",
            Address: {
                City: "Surat",
                State: "Gujarat",
                Country: "India",
                Pincode: 395010
            },
            Subjects :{
                Maths :69,
                Science :65,
                English :42
            },
    },

    {
        Name: "Monika",
        Surname: "Kathiriya",
        Gender: "FeMale",
        Age: 19,
        Email : "mk23@test.in",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :78,
            Science :70,
            English :92
        },
    },

    {
        Name: "Dhaval",
        Surname: "Solanki",
        Gender: "Male",
        Age: 22,
        Email : "ds98@test.in",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :88,
            Science :79,
            English :90
        },
    },

    {
        Name: "vijay",
        Surname: "Dankhara",
        Gender: "Male",
        Age: 25,
        Email : "vd39@test.in",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :85,
            Science :89,
            English :80
        },
    },

    {
        Name: "Vijay",
        Surname: "Solanki",
        Gender: "Male",
        Age: 23,
        Email : "vijay56@test.in",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :86,
            Science :89,
            English :87
        },
    },

    {
        Name: "Vijay",
        Surname: "Vekariya",
        Gender: "Male",
        Age: 22,
        Email : "vv45@test.in",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :78,
            Science :69,
            English :89
        },
    },

    {
        Name: "Bhutik",
        Surname: "Dudhat",
        Gender: "Male",
        Age: 22,
        Email : "bhautik23@gmail.com",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :88,
            Science :79,
            English :90
        },
    },

    {
        Name: "Darshan",
        Surname: "Chauhan",
        Gender: "Male",
        Age: 20,
        Email : "Darshan8@test.in",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :54,
            Science :65,
            English :78
        },
    },

    {
        Name: "Mahendra",
        Surname: "Purohit",
        Gender: "Male",
        Age: 22,
        Email : "pm3@test.in",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :56,
            Science :79,
            English :70
        },
    },

    {
        Name: "Vrishabh",
        Surname: "Jogani",
        Gender: "Male",
        Age: 23,
        Email : "vj5@test.in",
        Address: {
            City: "Surat",
            State: "Gujarat",
            Country: "India",
            Pincode: 395010
        },
        Subjects :{
            Maths :34,
            Science :36,
            English :33
        },
    },
]);






db.product_master.insertOne(
    { 
     ProductNo: "P00001",
     Description: "T-Shirts",
     ProfitPercent: 5,
     UnitMeasure: "Piece",
     QtyOnHand: 200,
     ReorderLvl: 50,
     SellPrice: 350,
     CostPrice: 250
   });

db.product_master.insertOne(
   {
   ProductNo: "P0345",
   Description: "Shirts",
   ProfitPercent: 6,
   UnitMeasure: "Piece",
   QtyOnHand: 150,
   ReorderLvl: 50,
   SellPrice: 500,
   CostPrice: 350
 });

db.product_master.insertOne(
 { 
   ProductNo: "P06734",
   Description : "Cotton Jeans",
   ProfitPercent: 5,
   UnitMeasure: "Piece",
   QtyOnHand: 100,
   ReorderLvl: 20,
   SellPrice: 600,
   CostPrice: 450
 });

db.product_master.insertOne(
 { 
   ProductNo: "P07865",
   Description: "Jeans",
   ProfitPercent: 5,
   UnitMeasure: "Piece",
   QtyOnHand: 100,
   ReorderLvl: 20,
   SellPrice: 750,
   CostPrice: 500
 });

db.product_master.insertOne(
 { 
   ProductNo: "P07868",
   Description: "Trousers",
   ProfitPercent: 2,
   UnitMeasure: "Piece",
   QtyOnHand: 150,
   ReorderLvl: 50,
   SellPrice: 850,
   CostPrice: 550
 });

db.product_master.insertOne(
 { 
   ProductNo: "P07885",
   Description: "Pull Overs",
   ProfitPercent: 2.5,
   UnitMeasure: "Piece",
   QtyOnHand: 80,
   ReorderLvl: 30,
   SellPrice: 700,
   CostPrice: 450
 });

db.product_master.insertOne(
 { 
   ProductNo: "P07965",
   Description: "Denim Shirts",
   ProfitPercent: 4,
   UnitMeasure: "Piece",
   QtyOnHand: 100,
   ReorderLvl: 40,
   SellPrice: 350,
   CostPrice: 250
 });

db.product_master.insertOne(
 {
   ProductNo: "P07975",
   Description: "Lycra Tops",
   ProfitPercent: 5,
   UnitMeasure: "Piece",
   QtyOnHand: 70,
   ReorderLvl: 30,
   SellPrice: 300,
   CostPrice: 175
 });

db.product_master.insertOne(
 { 
   ProductNo: "P08865",
   Description: "Skirts",
   ProfitPercent: 5,
   UnitMeasure: "Piece",
   QtyOnHand: 75,
   ReorderLvl: 30,
   SellPrice: 450,
   CostPrice: 300
 });

