use s_backend;
show tables;
desc client;

select so.*, cm.cname from salesorder so, client cm where so.clientNo = cm.clientNo;

select so.*, cm.cname from salesorder so inner join client cm on so.clientNo = cm.clientNo;

select so.*, cm.cname from salesorder so left join client cm on so.clientNo = cm.clientNo;

select so.*, cm.cname, cm.city from salesorder so right join client cm on so.clientNo = cm.clientNo order by cm.city desc;


select sod.*, cm.cname, pm.DESCRIPTION from sales_order_details sod 
inner join product_master pm on pm.ProductNo =sod.ProductNo
inner join salesorder so on so.orderNo = sod.orderNo
inner join client cm on so.clientNo = cm.clientNo;