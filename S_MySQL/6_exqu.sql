SELECT * FROM employees;
SELECT * FROM employees WHERE jobTitle = 'Sales Rep' AND employeeNumber BETWEEN 1200 AND 1500;
SELECT * FROM employees WHERE officeCode >= 2 AND jobTitle != 'Sales Rep';
SELECT * FROM customers WHERE country != 'USA';
SELECT * FROM customers WHERE customerNumber NOT BETWEEN 150 AND 200;
SELECT firstName, lastName AS 'Name of the employee' FROM employees ORDER BY lastName;
SELECT * FROM customers WHERE creditLimit > 70000 ORDER BY contactLastName DESC;
select * from customers where city in ("singapore", "liverpool", "nyc");
select * from customers where contactLastName in ("smith");
select * from employees where officeCode in (1,3,5);
select * from customers where creditlimit between 50000 and 95000;
select * from employees where officeCode in (1,3);
select * from customers where customerName like "s%";
select * from customers where contactLastName like "s%h";
select * from customers where contactLastName like "s____";
select * from customers where contactFirstName like "________";
select * from customers where customerName like "a%e";
select * from customers where customerName like "%ee%";
select jobTitle , count(*) from employees group by jobTitle;
select state, max(creditLimit) from customers group by state;




