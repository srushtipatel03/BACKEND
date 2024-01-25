// db.product_master.find()

db.product_master.insertMany([
  { 
   ProductNo : "P00001",
   Description : "T-Shirts",
   ProfitPercent : 5,
   UnitMeasure :"Piece",
   QtyOnHand : 200,
   ReorderLvl : 50,
   SellPrice :350,
   CostPrice :250
 },
 {
 ProductNo : "P0345",
 Description : "Shirts",
 ProfitPercent : 6,
 UnitMeasure :"Piece",
 QtyOnHand : 150,
 ReorderLvl : 50,
 SellPrice :500,
 CostPrice :350
},
{ 
 ProductNo : "P06734",
 Description : "Cotton Jeans",
 ProfitPercent : 5,
 UnitMeasure :"Piece",
 QtyOnHand : 100,
 ReorderLvl :20,
 SellPrice :600,
 CostPrice :450
},
{ 
 ProductNo : "P07865",
 Description : "Jeans",
 ProfitPercent : 5,
 UnitMeasure :"Piece",
 QtyOnHand : 100,
 ReorderLvl :20,
 SellPrice :750,
 CostPrice :500
},
{ 
 ProductNo : "P07868",
 Description : "Trousers",
 ProfitPercent : 2,
 UnitMeasure :"Piece",
 QtyOnHand : 150,
 ReorderLvl :50,
 SellPrice :850,
 CostPrice :550
},
{ 
 ProductNo : "P07885",
 Description : "Pull Overs",
 ProfitPercent : 2.5,
 UnitMeasure :"Piece",
 QtyOnHand : 80,
 ReorderLvl :30,
 SellPrice :700,
 CostPrice :450
},
{ 
 ProductNo : "P07965",
 Description : "Denim Shirts",
 ProfitPercent : 4,
 UnitMeasure :"Piece",
 QtyOnHand : 100,
 ReorderLvl : 40,
 SellPrice :350,
 CostPrice :250
},
{
 ProductNo : "P07975",
 Description : "Lycra Tops",
 ProfitPercent : 5,
 UnitMeasure :"Piece",
 QtyOnHand : 70,
 ReorderLvl : 30,
 SellPrice :300,
 CostPrice :175
},
{ 
 ProductNo : "P08865",
 Description : "Skirts",
 ProfitPercent : 5,
 UnitMeasure :"Piece",
 QtyOnHand : 75,
 ReorderLvl : 30,
 SellPrice :450,
 CostPrice :300
}

]);