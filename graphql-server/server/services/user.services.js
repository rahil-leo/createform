const User = require('../models/User')

exports.findUser = async (name)=>{
    try {
        const user = await User.findOne({ name })
        console.log(user,'here is the user')
        return user
    } catch (err) {
        console.log(err)
    }
}

exports.createNewUser = async ({ name, facebook, instagram }) => {
    try {
        const newuser = new User({ name, facebook, instagram })
        console.log(newuser,'here is the new user')
        return await newuser.save()
    } catch (err) {
        console.log(err)
    }
}
exports.editOneUser = async ({ name, facebook, instagram }) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ name }, { facebook, instagram }, { new: true });
        console.log(updatedUser,'here is the updated user ')
        return updatedUser
    } catch (err) {
        console.log(err)
    }
} 


