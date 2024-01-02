-- \sql

-- \connect root@localhost:3306

-- create database S_BACKEND;

-- show databases;

-- use S_BACKEND;

-- show tables;

-- select * from user;

create table user(
    id int,
    firstName varchar(20),
    lastName  varchar(30),
    gender  varchar(20),
    email  varchar(20),
    mobileNo int
);

-- describe user;
-- desc user;

insert into user (id, firstName, lastName, gender, email, mobileNo) values (1, 'girish', 'gondaliya', 'male', 'girish@test.in', 123456789);

insert into user (id, firstName, lastName, gender, email, mobileNo) values (2, 'vijay', 'solanki', 'male', 'vijay@test.in', 123456789),
(3, 'monika', 'kathiriya', 'Female', 'monika@test.in', 123456789),
 (4, 'srushti', 'sojitra', 'Female', 'srushti@test.in', 123456789),
 (5, 'vijay', 'dankhara', 'male', 'vijay@test.in', 123456789);

insert into user values(6, 'jenil', 'kakadiya', 'male', 'jenil@test.in', 123456789);

-- skip some column data

insert into user (id, firstName, lastName, gender, mobileNo) values (7, 'krish', 'ranghani', 'male', 'krish@test.in', 123456789);

(8, 'mahendra', 'purohit', 'male', 'mahendra@test.in', 123456789);


insert into user values
(9, 'vrishabh', 'jogani', 'male', 'vrishabh@test.in', 123456789);

