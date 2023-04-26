const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery);
};
const createNewUser = (body) => {
  const SQLQuery = ` INSERT INTO users (nama, umur, email) 
                      VALUES ('${body.nama}', '${body.umur}', '${body.email}')`;

  return dbPool.execute(SQLQuery);
};

const updateUser = (body,idUsers) => {
  const SQLQuery = `UPDATE users 
                    SET nama='${body.nama}', umur='${body.umur}', email='${body.email}' 
                    WHERE id=${idUsers}`

  return dbPool.execute(SQLQuery);
}

const deleteUser = (idUsers) => {
  const SQLQuery = `DELETE FROM users WHERE id=${idUsers}`

  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
};
