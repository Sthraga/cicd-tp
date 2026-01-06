const request = require("supertest");
const app = require("../../src/server");

describe("Integration tests for app endpoints", () => {
  describe("POST /greeting", () => {
    it("should return greeting with x-name header", async () => {
      const response = await request(app)
        .post("/greeting")
        .set("x-name", "Alice")
        .expect(200);

      expect(response.body).toEqual({ message: "Hello Alice!" });
    });

    it("should return default greeting without x-name header", async () => {
      const response = await request(app)
        .post("/greeting")
        .expect(200);

      expect(response.body).toEqual({ message: "Hello world!" });
    });
  });

  describe("GET /greeting/:name", () => {
    it("should return greeting with name from URL", async () => {
      const response = await request(app)
        .get("/greeting/Bob")
        .expect(200);

      expect(response.body).toEqual({ message: "Hello Bob!" });
    });
  });
});
