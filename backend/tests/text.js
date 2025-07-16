const request = require("supertest");
const app = require("../app"); // export your Express app

describe("POST /api/quiz/start", () => {
  it("should create a user and return questions", async () => {
    const res = await request(app)
      .post("/api/quiz/start")
      .send({ name: "Test", email: "test@test.com", category: "frontend" });

    expect(res.statusCode).toBe(200);
    expect(res.body.userId).toBeDefined();
    expect(res.body.questions.length).toBeGreaterThan(0);
    expect(response.body.questions).toBeInstanceOf(Array);
  });
});

it("should return 400 if required fields are missing", async () => {
  const res = await request(app).post("/api/quiz/start").send({});

  expect(res.statusCode).toBe(400); // or whatever your app returns
});
