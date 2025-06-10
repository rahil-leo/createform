const { findUser,createNewUser,editOneUser } = require('../services/user.services')


const getUser = async (_, { name }) => {
    return await findUser(name)
}

const createUser = async (_, args) => {
    return await createNewUser(args)
}

const editUser = async (_, args) => {
    return await editOneUser(args)
}

module.exports = {getUser,createUser,editUser}