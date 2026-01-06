const request = require("supertest");
const app = require("../../src/server");

describe("Integration tests for app endpoints", () => {
  describe("POST /hello", () => {
    it("should return greeting with x-name header", async () => {
      const response = await request(app)
        .post("/hello")
        .set("x-name", "Alice");
      expect(response.text).toBe("Hello world! From Alice");
    });

    it("should return default greeting without x-name header", async () => {
      const response = await request(app).post("/hello").expect(200);
      expect(response.text).toBe("Hello world!");
    });

    it("should return greeting with special characters in x-name header", async () => {
      const response = await request(app)
        .post("/hello")
        .set("x-name", "@#$%");
      expect(response.text).toBe("Hello world! From @#$%");
    });
  });

  describe("GET /hello", () => {
    it("should return Hello world", async () => {
      const res = await request(app).get("/hello");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world!");
    });
    
    it("should return greeting with name from URL", async () => {
      const response = await request(app).get("/hello/Bob");
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("Hello world! From Bob");
    });

    it("should return greeting with special characters in URL", async () => {
      const response = await request(app).get("/hello/@#$%");
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("Hello world! From @#$%");
    });
  });
});
