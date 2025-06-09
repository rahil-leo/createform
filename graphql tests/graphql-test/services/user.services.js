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
