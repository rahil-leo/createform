const User = require('../models/User');

exports.createUser = async (name, facebook,instagram) => {
    try {
        const newUser = new User({ name, facebook, instagram })
        console.log(newUser,'here is the added data ')
        const savedUser = await newUser.save()
        return savedUser
    } catch (err) {
        throw new Error(err.message)
    }
};

exports.findUser = async (name) => {
    try {
        const user = await User.findOne({ name: name });
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.editUser = async (name, facebook, instagram) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ name },{ facebook, instagram },{ new: true });
        console.log(updatedUser)
        return updatedUser;
    } catch (err) {
        throw new Error(err.message);
    }
};




    
