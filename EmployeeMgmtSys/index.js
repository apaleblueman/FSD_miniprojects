//importing modules and submodules
const readline = require('readline/promises');
//linking pipelines
const { stdin: input, stdout: output } = require('process');
//setting up interface
const rl = readline.createInterface({ input, output });
//object array
const employees= [];
let id_seed  = 1000;
//employee class
class Employee{
    constructor(name,position,salary){
        this.id = id_seed + 1 ;
        id_seed = this.id;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}
//adding new employee
function addEmployee(name,position,salary){
    const new_emp = new Employee(name,position,salary);
    employees.push(new_emp);
    return new_emp;
}
//searching for an employee via id
function searchEmployee(idToFind){
    const emp_found = employees.find((emp_obj)=>emp_obj.id == idToFind)
    return emp_found;
}
//main loop
async function main() {
            running = true;
            while(running){
            console.log("===================================");
            console.log("  EMPLOYEE MANAGEMENT SYSTEM (EMS)  ");
            console.log("===================================");
            console.log("Welcome! Please choose an option:\n");
            console.log("1) Add a new employee");
            console.log("2) View all employees");
            console.log("3) Find employee by ID");
            console.log("4) Update employee information");
            console.log("5) Delete employee");
            console.log("0) Exit");
            console.log("===================================");    
            const option = await rl.question('option:');
            switch(option){
                case '1':
                    const name = await rl.question('Name: ');
                    const position = await rl.question('Position: ');
                    const salary = Number(await rl.question('Salary: '));
                    if(!name|| !position || !salary || salary <= 0 || salary === 'NaN'){
                        console.log("Enter valid data!");
                    }
                    else{
                        const new_emp = addEmployee(name,position,salary);
                        console.log("added new employee "+ new_emp.name);
                    }
                    break;
                case '2':
                    if(employees.length !=0)
                    {
                        employees.forEach(emp => {
                        console.log("===================================");
                        console.log("ID:" + emp.id);
                        console.log("Name:" + emp.name);
                        console.log("Position:" + emp.position);
                        console.log("Salary:" + emp.salary);
                        
                    });
                    // await rl.question("press enter to go back menu");
                    }
                    else{
                        console.log("no employees");
                        // await rl.question("press enter to go back menu");
                    }
                    break;
                case '3':
                    const idToFind = await rl.question("press enter employee id:");
                    const emp_found = searchEmployee(idToFind);
                    if(emp_found)
                    {   
                        console.log("===================================");
                        console.log("ID:" + emp_found.id);
                        console.log("Name:" + emp_found.name);
                        console.log("Position:" + emp_found.position);
                        console.log("Salary:" + emp_found.salary);
                    }
                    else{ console.log("not found")}
                    // await rl.question("press enter to go back menu");
                    break;
                case '4':
                    
                    const updateID = await rl.question("Enter employe id to update:");
                    const newname = await rl.question('Name: ');
                    const newposition = await rl.question('Position: ');
                    const newsalary = await rl.question('Salary: ');
                    if(!newname|| !newposition || !newsalary || newsalary <= 0 || newsalary === 'NaN'){
                        console.log("Enter valid data!");
                    }
                    const empToUpdate = searchEmployee(updateID);
                    if(empToUpdate){
                        console.log("Found:");
                        console.log(empToUpdate);
                    }
                    empToUpdate.name = newname;
                    empToUpdate.position = newposition;
                    empToUpdate.salary = newsalary;
                    break;
                case '5':
                    const idToDel = await rl.question("Enter ID of Employee to delete:");
                    const EmpToDelete = employees.findIndex((emp_obj) => emp_obj.id == idToDel);
                    employees.splice(EmpToDelete,1);
                    break;
                case '0':
                    console.log("bye boss!");
                    running = false;
                    break;
                default:
                    console.log("invalid input");
                    break;
                }
                await rl.question("press enter to continue");
                
            }
            rl.close(); 
            }

main();