const { makeExecutableSchema } = require('graphql-tools')
const SchemaDefination = require('../models/schema-definations')

const userResolver = require('../resolvers/users/user-resolver')
const { employmentStatus, User, UserInput } = require('../models/users/user-graphql')

const executableSchema = makeExecutableSchema({

    typeDefs: [
        SchemaDefination,
        User,
        UserInput,
        employmentStatus
    ],
    resolvers: userResolver
});

module.exports = executableSchema;