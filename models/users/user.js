const mongoose = require('mongoose');
const userSchema = require('../../models/users/user-mongoose')

userSchema.statics = {

    getUsers() {
        return User.find({});
    },

    getUser(id) {
        return User.findById(id);
    },

    deleteUser(id) {
        return User.findByIdAndDelete(id)
    },

    createUser({
        name,
        email,
        phoneNumber,
        age,
        vehicle,
        employmentStatus,
        bloodGroup,
        occupation
    }) {
        return User.create({
            name,
            email,
            phoneNumber,
            age,
            vehicle,
            employmentStatus,
            bloodGroup,
            occupation
        })
    },

    updateUser(id, userObj) {
        let {
            name,
            email,
            phoneNumber,
            age,
            vehicle,
            employmentStatus,
            bloodGroup,
            occupation
        } = userObj;

        return User.findByIdAndUpdate(
            id,
            {
                name,
                email,
                phoneNumber,
                age,
                vehicle,
                employmentStatus,
                bloodGroup,
                occupation
            },
            {
                new: true
            }
        )
    },
};

const User = mongoose.model('User', userSchema)
module.exports = User;