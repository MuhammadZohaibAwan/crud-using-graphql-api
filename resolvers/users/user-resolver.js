const { getUser, getUsers, createUser, updateUser, deleteUser } = require('./user')

const userResolver = {
    Query: {

        getUsers, getUser,
    },

    Mutation: {
        createUser,
        updateUser,
        deleteUser
    }
};

module.exports = userResolver;