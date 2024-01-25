// db.salesman_master.find()

db.salesman_master.insertMany([{
    SalesmanNo: 'S00001',
    Name: 'Aman',
    Address:{
        line: 'A/14 Worli',
        City: 'Mumbai',
        Pincode: '400002',
        State: 'Maharashtra'
    },
        SalAmt: 3000,
        Remarks: 'Good',
        Target: 100,
        YtdSales: 50
},
{
    SalesmanNo: 'S00002',
    Name: 'Omkar',
    Address: {
    line: '65 Nariman',
    City: 'Mumbai',
    Pincode: '400001',
    State: 'Maharashtra'
},
    SalAmt: 3000,
    Target: 200,
    YtdSales: 100,
    Remarks: 'Good'
},
{
    SalesmanNo: 'S00003',
    Name: 'Raj',
    Address: {
    line: 'P-7 Bandra',
    City: 'Mumbai',
    Pincode: '400032',
    State: 'Maharashtra'
    },
    SalAmt: 3000,
    Target: 200,
    YtdSales: 100,
    Remarks: 'Good'
},
{
    SalesmanNo: 'S00004',
    Name: 'Ashish',
    Address:{
    line: 'A/5 Juhu',
    City: 'Mumbai',
    Pincode: '400044',
    State: 'Maharashtra'
    },
    SalAmt: 3500,
    TgtToGet: 200,
    YtdSales: 150,
    Remarks: 'Good'
}
]);