const { createUser, editUser } = require('../services/user.services');

const Mutation = {
    createUser: async (_, { name, facebook,instagram }) => {
        return await createUser(name, facebook,instagram)
    },
    editUser: async (_, { name, facebook, instagram }) => {
        return await editUser(name, facebook, instagram);
    },

};

module.exports = { Mutation }

