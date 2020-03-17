import request from "supertest";
import server from "../../src/server";
import {createConnection} from "typeorm";

beforeAll(async done => {
    await createConnection();
    done()
});

describe("Test server routes", () => {
    it("GET / respond Hello World!", done => {
        request(server)
            .get("/")
            .expect("Content-Type", /text\/html/)
            .expect("Hello World!")
            .expect(200, done);
    });

    it("GET /users respond with json", done => {
        request(server)
            .get("/users")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});
