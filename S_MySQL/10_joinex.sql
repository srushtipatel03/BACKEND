use s_backend;
show tables;
desc client;
desc salesorder;
desc product_master;
desc SALESMAN_MASTER;
desc sales_order_details;

-- A 
select sod.*, cm.CName, pm.Description from sales_order_details sod
inner join salesorder so on so.OrderNo = sod.OrderNo
inner join client cm on so.clientNo = cm.clientNo
inner join product_master pm on sod.ProductNo =  pm.ProductNo where CName = "Ivan Bayross";

-- B
select sod.ProductNo, pm.Description, sod.Qtyordered, sod.Qtydisp, so.orderdate 
from salesorder so
inner join sales_order_details sod on so.orderNo = sod.orderNo
inner join product_master pm on sod.ProductNo = pm.ProductNo
WHERE MONTH(so.DelyDate) = MONTH(CURRENT_DATE()) AND YEAR(so.DelyDate) = YEAR(CURRENT_DATE());

-- C
select distinct pm.ProductNo, pm.DESCRIPTION from sales_order_details sod
inner join product_master pm on pm.ProductNo = sod.ProductNo order by DESCRIPTION asc;

-- D
select sod.*, cm.CName, pm.ProductNo , pm.Description from sales_order_details sod
inner join salesorder so on so.OrderNo = sod.OrderNo
inner join client cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo =  pm.ProductNo where Description = "Trousers";

-- E
SELECT so.OrderNo, cm.CName, pm.Description, sod.Qtyordered FROM sales_order_details sod
JOIN salesorder so ON sod.OrderNo = so.OrderNo
JOIN client cm ON so.ClientNo = cm.ClientNo
JOIN product_master pm ON sod.ProductNo = pm.ProductNo
WHERE pm.Description = 'Pull Overs' AND sod.Qtyordered < 5;

-- F
select sod.*, cm.CName, pm.Description from sales_order_details sod
inner join salesorder so on so.OrderNo = sod.OrderNo
inner join client cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo =  pm.ProductNo where cm.CName in ('Ivan Bayross','Mamta Muzumdar');   

-- G
select sod.*, cm.ClientNo,cm.CName, pm.Description from sales_order_details sod
inner join salesorder so on so.OrderNo = sod.OrderNo
inner join client cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo =  pm.ProductNo where cm.ClientNo in ('C00001','C00002');









