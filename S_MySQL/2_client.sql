create table client(
    clientNo varchar(6),
    CName varchar(20),
    CAddress1 varchar(30),
    CAddress2 varchar(30),
    City varchar(15),
    Pincoad int,
    CState varchar(15),
    CBaldue int
);

insert into client(ClientNo, CName, CAddress1, CAddress2, City, Pincoad, CState, CBalDue) values
("C00001",'Ivan Bayross',"A/14","Worli","Mumbai",400054,"Maharashtra",15000),
("C00002",'Mamta Muzumdar',"65","Nariman","Madras",780001,"TamilNadu",0),
("C00003",'Chhaya Bankar',"p-7","Bandar","Mumbai",400057,"Maharashtra",5000),
("C00004",'Ashwini Joshi',"A/5","Juhu","Bangalore",560001,"Karnataka",0),
("C00005",'Hansel Colaco',"A/14","Worli","Mumbai",400060,"Maharashtra",2000),
("C00006",'Deepak Sharma',"A/14","Worli","Mangalore",560050,"Karnataka",0);

-- select * from client;

--a. select Cname from client;
--b. select * from client;
--c. select Cname, City, CState from client;
--e. select * from client where City = 'Mumbai';
--a. update client set City = 'Bangalore' where clientNo = 'C00005';
--b. update client set CBaldue = 1000 where clientNo ='C00005';

