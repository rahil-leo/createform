const { createUser } = require('../services/user.services');

const Mutation = {
    createUser: async (_, { name, facebook,instagram }) => {
        return await createUser(name, facebook,instagram)
    }
};

module.exports = { Mutation }

