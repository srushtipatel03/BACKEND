-- select name, city from client;
-- select *, city from client;
-- select name as "Full Name" from client;
-- select name as "Full Name", city "District" from client;


-- Where clause
-- select * from client where city = 'mumbai';
-- select * from client where baldue < 5000;
-- select * from client where baldue >= 5000;
-- select * from client where baldue = 5000;


-- order by
-- select * from client order by city desc, baldue asc;
-- select * from client order by city desc;


-- update query
-- update client set baldue = 1000 // all record update
-- update client set baldue = 1000, city = 'Navi Mumbai' where baldue = 0;


-- delete query
-- delete from client;
-- delete from client where address1 = '66';


-- drop statement 
-- drop table client;
-- drop database S_BACKEND;