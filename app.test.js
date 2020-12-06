const request = require("supertest");
const app = require("./app");
process.env.PORT = 3000;

describe("Unit Test the app routes", () => {
  test("GET/ request should return status 200 success", async (done) => {
    const response = await request(app).get("/");
    console.log(response.status);
    expect(response.status).toBe(200);
    done();
  });
});
