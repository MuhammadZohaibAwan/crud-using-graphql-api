const { graphqlHTTP } = require('express-graphql');
const executableSchema = require('../models/index');

module.exports.routes = (app) => {
    app.use("/graphql", graphqlHTTP({
        schema: executableSchema,
        graphiql: true
    }));
};