const mongoose = require('mongoose');
const User = require('../models/userModel');

//Create
const create = async (req,res) => {
    try {
        const { name, surname, department } = req.body;
        if (!name || !surname || !department) {
            return res.status(400).json({message: `name, surname and department are required!`})
        }

        const createdUser = await User.create( {name, surname, department});
        return res.status(201).json(createdUser);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error creating an user' });
      }  
};


//List all users
const findAll = async (req, res) => {
    try {
        const users = await User.find().populate(`department`);
        return res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: `Cannot list users`})
    }
}

//List User by Id
const findById = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) return res.status(400).json({message: `Id is required`});
        const user = await User.findById(id).populate(`department`)
        if (!user) {
      return res.status(404).json({ message: 'User do not exist' });
    }
    return res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: `Cannot search for user`})
    }
}

//Update user by id
const update = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, surname, department } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Id is required' });
    }

    const updated = await User.findByIdAndUpdate(
      id,
      { name, surname, department },
      { new: true, runValidators: true }
    ).populate('department');

    if (!updated) {
      return res.status(404).json({ message: 'User do not exist' });
    }

    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Cannot update user' });
  }
};


//Delete user by Id
const remove = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: 'Id is required' });
    }

    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'User do not exist' });
    }

    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Cannot delete user' });
  }
};



module.exports = { create, findAll, findById, update, remove };