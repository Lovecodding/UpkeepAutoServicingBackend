var db=require('../dbconnection');
var employee={
    getAllEmployee:function(callback)
    {
        return db.query('select * from employee_tbl',callback);
    },
    getAllEmployeeWithUserName(callback)
    {
        return db.query('select u.*,e.* from user_tbl u,employee_tbl e  where u.user_id=e.fk_user_id',callback);
    },
    getEmployeeById:function(employee_id,callback)
    {
         return db.query('select u.*,e.* from user_tbl u,employee_tbl e where e.employee_id=? and u.user_id=e.fk_user_id',[employee_id],callback);
    },
    getAllEmpWithDeliveryBoy(callback)
    {
        return db.query('select u.user_name,e.* from user_tbl u,employee_tbl e where u.user_id=e.fk_user_id and employee_designation="Delivery Boy"',callback);
    },
    getAllEmpWithMachanic(callback)
    {
        return db.query('select u.*,e.* from user_tbl u,employee_tbl e where u.user_id=e.fk_user_id and employee_designation="Machanic"',callback);
    },
    getAllType(fk_user_id,callback)
    {
        return db.query('select u.user_type from user_tbl u,employee_tbl e where u.user_id=e.fk_user_id',[fk_user_id],callback);
    },
    getAllDesignation(employee_id,callback)
    {
        return db.query('select e.employee_id,e.employee_designation from user_tbl u,employee_tbl e ',[employee_id],callback);
    },
    AddEmployee:function(item,callback)
    {
        return db.query('insert into employee_tbl (fk_user_id) values(?)',[item.fk_user_id],callback);
    },
    deleteEmployee:function(employee_id,callback)
    {
        return db.query('delete from employee_tbl where employee_id=?',[employee_id],callback);
    },
    updateEmployee:function(employee_id,item,callback)
    {
        return db.query('update employee_tbl set employee_img=?,employee_designation=?,salary=?,fk_user_id=? where employee_id=?',[item.employee_img,item.employee_designation,item.salary,item.fk_user_id,employee_id],callback);
    },
    deleteAllEmp:function(item,callback)
    {
            return db.query("delete from employee_tbl where employee_id in (?)",[item],callback);
    }

}
module.exports=employee;