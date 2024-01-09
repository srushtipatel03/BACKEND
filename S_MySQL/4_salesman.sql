create table SALESMAN_MASTER(
    SalesmanNo varchar(6) primary key,
    Name varchar(20) not null,
    Address1 varchar(30) not null,
    Address2 varchar(30),
    City varchar(20),
    Pincode int,
    State varchar(20),
    SalAmt int not null,
    TgtToGet int not null,
    YtdSales int not null,
    Remarks varchar(60) 
);

insert into SALESMAN_MASTER(SalesmanNo,Name,Address1,Address2,City,Pincode,State,SalAmt,TgtToGet,YtdSales,Remarks) values
("S00001","Aman","A/14","Worli","Mumbai",400002,"Maharashtra",3000,100,50,"good"),
("S00002","Omkar","65","Nariman","Mumbai",400001,"Maharashtra",3000,200,100,"good"),
("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharashtra",3000,200,100,"good"),
("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharashtra",3500,200,150,"good");



-- select * from SALESMAN_MASTER;


--f. select * from SALESMAN_MASTER where SalAmt = 3000;
--d. update SALESMAN_MASTER set City = 'pune';