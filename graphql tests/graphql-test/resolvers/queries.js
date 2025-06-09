const { getUsers,findUser } = require('../services/user.services');

const Query = {
    getUsers: async () => {
        return await getUsers();
    },
    getUser: async (_, { name }) => {
        return await findUser(name)
    },
};

module.exports = { Query };
