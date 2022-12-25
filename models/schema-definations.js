const SchemaDefination = `

scalar 

schema {
    query : Query 
    mutation : Mutation 
}

type Query {
    getUsers : [User]
    getUser(id: String!) : User 
}

type Mutation {
    createUser(user: UserInput!): User
    updateUser(id: String!, user: UserInput!): User
    deleteUser(id: String!): User
}`

module.exports = SchemaDefination;