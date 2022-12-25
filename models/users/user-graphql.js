const employmentStatus = `
 enum employmentStatus {
    employed
    unemployed
 }`

const User = `
type User {
    _id: String!
    name: String!
    email: String!
    phoneNumber: Int!
    age: Int!
    vehicle: String!
    employmentStatus: employmentStatus!
    bloodGroup: String!
    occupation : String!
}
`
const UserInput = `
   input UserInput {
    name: String!
    email: String!
    phoneNumber: Int!
    age: Int!
    vehicle: String!
    employmentStatus: employmentStatus!
    bloodGroup: String!
    occupation : String!
   }`

module.exports = {
    employmentStatus,
    User,
    UserInput
}