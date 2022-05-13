// function for adding employee
function addEmployee() {

  const query = `SELECT * FROM roles`;
  db.query(query, function (err, res) {
      if (err) {
          throw err;
      }
      // returns the response to the console.table function and .map will return an array of objects based on the data in the query
      const roles = res.map(role => {
          return {
              //  SQL constructor (title, salary, department_id)
              name: role.title,
              salary: role.salary,
              value: role.id
          }
      });
      // displays the roles to the user as a table
      console.table(res);
      // displays to the user the available roles
      console.log('Roles Available\n');

      // runs the promptAdd function below
      promptAdd(roles);
  });
}

const getRoles = async() => {
  try{
    const query = `SELECT * FROM roles`;
    db.query(query, async(err, res) => {
      const roles = res.map(role => {
        return {
          name: role.title,
          salary: role.salary,
          value: role.id
        }
      });
      rolesArr.push(...roles);
      console.table(res)
    });
    
  }catch(err){
    console.error(err);
  }
}

const createEmployee = async() => {
  try{
    let response = await inquirer.prompt(createEmployeePrompts);
    let query = `INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager) VALUES (?, ?, ?, ?, ?)`
    db.query(query, [response.first_name, response.last_name, response.roleId, response.managerId, response.is_manager]), async(err, res) => {
      if(!err){
        console.table(res);
        console.log(`${response.first_name} ${response.last_name} has successfully been added to the database.`);
        
      }else{
        return err;
      }
    }
    let confirm = await inquirer.prompt(addEmployeeConfirm);
    if(confirm){
      return createEmployee();
    }else{
      return nav();
    }
  }catch(err){
    console.error(err)
  };
  
  
}