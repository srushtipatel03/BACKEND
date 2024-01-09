create table salesorder(
    orderNo varchar(6) primary key,
    clientNo varchar(6),
    foreign key (clientNo) references client(clientNo),
    orderdate date  not null,
    delyaddr varchar(25),
    SalesmanNo varchar(6),
    foreign key (SalesmanNo) references SALESMAN_MASTER(SalesmanNo),
    delytype char(1),
    billyn char(1),
    delydate date,
    orderstatus varchar(10)
);

insert into salesorder(orderNo,clientNo,orderdate,SalesmanNo,delytype,billyn,delydate,orderstatus) values 
("O19001","C00001","2004-06-12","S00001","F","N","2002-07-20","in process"),
("O19002","C00002","2004-06-25","S00002","P","N","2002-06-27","cancelled"),
("O46865","C00003","2004-02-18","S00003","F","Y","2002-02-20","fulfilled"),
("O19003","C00001","2004-04-03","S00001","F","Y","2002-04-07","fulfilled"),
("O46866","C00004","2004-05-20","S00002","P","N","2002-05-22","cancelled"),
("O19008","C00005","2004-05-24","S00004","F","N","2002-07-26","in process");

--  select * from salesorder;



