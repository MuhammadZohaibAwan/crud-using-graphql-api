const mongoose = require('mongoose')
const { MongoMemoryServer } = require("mongodb-memory-server");

const request = require("../test")
const ROUTE = "/graphql";

// const userId = new mongoose.Types.ObjectId().toString();

describe("graphql api tests", () => {

    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    describe("users query testing", () => {
        it("should add the users", async () => {
            const query = {
                query: `
                mutation {
                createUser(user:  {
                    name: "Mike",
			        email: "iammike@gmail.com",
			        phoneNumber: 321221012,
			        age: 32,
			        vehicle: "Atlas",
			        employmentStatus: employed,
			        bloodGroup: "B+",
			        occupation: "anchors"
                }) {
                    _id,
                    name,
	                email,
	                phoneNumber,
	                age,
	                vehicle,
	                employmentStatus,
	                bloodGroup,
	                occupation
                }
            }`
            }

            const { statusCode, body } = await request.post(ROUTE).send(query)

            expect(statusCode).toBe(200);
            expect(body.data.createUser).toEqual({
                _id: expect.any(String),
                name: 'Mike',
                email: 'iammike@gmail.com',
                phoneNumber: 321221012,
                age: 32,
                vehicle: 'Atlas',
                employmentStatus: 'employed',
                bloodGroup: 'B+',
                occupation: 'anchors'
            })
        })

        it("should get the users", async () => {
            const query = {
                query: `{
            	getUsers{
	                    name,
	                    email,
	                    phoneNumber,
	                    age,
	                    vehicle,
	                    employmentStatus,
	                    bloodGroup,
	                    occupation
	                }
                }`
            }

            const { statusCode, body } = await request.post(ROUTE).send(query)

            expect(statusCode).toBe(200);
            expect(body.data.getUsers).toBeDefined()
            expect(body.data.getUsers.length).toBeGreaterThan(0)
        })
    })
})