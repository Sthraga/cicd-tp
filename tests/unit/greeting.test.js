const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("returns the hello world message when name is empty", () => {
    expect(getGreeting("")).toBe("Hello world!");
  });

  it("returns the hello world message when name contains special characters", () => {
    expect(getGreeting("@#$%")).toBe("Hello world! From @#$%");
  });
});
