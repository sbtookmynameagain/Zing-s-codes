class Employee{
    constructor (name, salary, tax){
        this.name = name;
        this.salary=salary;
        this.tax=tax;
    }
    calculateSalary(){
        this.netSalary=Math.round(this.salary - ((this.tax / 100) * this.salary));
        return this.netSalary;
    }

    generateId(){
        this.id=Math.floor(Math.random() * 100000);
        return this.id;
    }
}

class EmployeeUI{
    addEmployee(employee){
        const employeeList= document.querySelector('tbody');

        const markup =`<tr>
        <th scope="row">${employee.id}</th>
        <th>${employee.name}</th>
        <th>${employee.salary} </th>
        <th>${employee.tax}</th>
        <th>${employee.netSalary}</th>
        <th><a href="#" class="btn btn-danger delete"> Delete</a></th>
    </tr>`;
   
    employeeList.insertAdjacentHTML('afterbegin',markup);   
    }
    
    clearField(){
    document.querySelector('#nameField').value='';
    document.querySelector('#salaryField').value='';
    document.querySelector('#taxField').value='';
    }
    
    alertMessage(messageType, message){
       const markup=`<div class="alert alert-${messageType}" role="alert">${message}</div>`;
       
       const form = document.querySelector('form');
       form.insertAdjacentHTML('beforebegin', markup);

       setTimeout(()=>{
           document.querySelector('.alert').remove();
       },1500)
    }
    deleteEmployee(target){
        if(target.matches('.delete')){
            target.parentElement.parentElement.remove();
            return true;
        }
    }
}

class storeEmployee{
    static getEmployees(){
        let employees;

        if(localStorage.getItem('employees')===null){
            employees=[];
        }else{
            employees = JSON.parse(localStorage.getItem('employees'));
        }
        return employees;

    }
//call this function whenever page is reloaded
    static displayEmployees(){
        const employees = storeEmployee.getEmployees();
        const employeeui = new EmployeeUI();
        employees.forEach(employee=>{
            employeeui.addEmployee(employee);
        });
    }

    static addEmployee(employee){
        const employees = storeEmployee.getEmployees();
        employees.push(employee);

        localStorage.setItem('employees', JSON.stringify(employees));
    }

    static removeEmployee(id){
        const employees= storeEmployee.getEmployees();

        employees.forEach((employee,index)=>{
            if (employee.id === parseInt(id)){
                employees.splice(index,1);
            }
        });

        localStorage.setItem('employees', JSON.stringify(employees));
    }
}

const addEmployeeButton=document.querySelector('#add_employee');
addEmployeeButton.addEventListener('click', e =>{
    const name = document.querySelector('#nameField').value;
    const salary = document.querySelector('#salaryField').value;
    const tax = document.querySelector('#taxField').value;

    const employeeui = new EmployeeUI();
    if(name ===""||salary===""||tax==""){
        employeeui.alertMessage('danger', 'Please complete the form.')
    }else{
        const employee= new Employee(name, salary,tax);
        employee.id=employee.generateId();
        employee.netSalary = employee.calculateSalary();

        employeeui.addEmployee(employee);

        storeEmployee.addEmployee(employee);
        

        employeeui.alertMessage('success', 'Employee is added successfully.');
        employeeui.clearField();
    }
});

document.querySelector('tbody').addEventListener('click', e=>{
    const employeeui = new EmployeeUI();
    
    const isDeleted= employeeui.deleteEmployee(e.target);

    storeEmployee.removeEmployee(e.target.parentElement.parentElement.
        firstElementChild.textContent);

        if(isDeleted){
            employeeui.alertMessage('success', 'Employee deleted successfully.')
        }
});
document.querySelector('form').addEventListener('submit', e=>{
    e.preventDefault();
})

storeEmployee.displayEmployees();