const db = require('../../db');
const utils = require('../../utils');


const readDepartments = async() => {
  const query = `SELECT * FROM departments`;
  try{
    db.db.query(query, async(err, res) => {
    console.table(res);
    utils.navigation.cliNav();
  })
  
 
}catch(err){
  console.error(err);
}
}
module.exports = readDepartments