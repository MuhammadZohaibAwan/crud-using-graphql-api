const User = require('../../models/users/user')

const getUsers = async (_, args) => {
    const users = await User.find({});
    return users;
};

const getUser = async (_, args) => {
    const user = await User.getUser(args.id)
    return user;
};

const createUser = async (_, args) => {
    const user = await User.createUser(args.user)
    return user;
};

const updateUser = async (_, args) => {
    const user = await User.updateUser(args.id, args.user)
    return user;
};

const deleteUser = async (_, args) => {
    const user = await User.deleteUser(args.id)
    return user;
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};