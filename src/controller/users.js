const userModel = require('../models/users');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModel.getAllUsers();

    res.status(200).json({
      message: 'Get All Users Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error: ',
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;

  if(!body.email || !body.nama || !body.umur){
    return res.status(400).json({
      message: "Anda Mengirimkan Data yang SALAH",
      data: null
    })
  }

  try {
    await userModel.createNewUser(body);
    res.status(201).json({
      message: 'CREATE new user success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUsers } = req.params;
  const { body } = req;

  try {
    await userModel.updateUser(body, idUsers);
    res.status(200).json({
      message: 'Update User Success',
      data: {
        id: idUsers,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUsers } = req.params;
  const { body } = req;
  try {
    await userModel.deleteUser(idUsers);
    res.json({
      message: 'Delete User Success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
