const { getUsers } = require('../services/user.services');

const Query = {
    getUsers: async () => {
        return await getUsers();
    },
};

module.exports = { Query };
