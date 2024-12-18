import { describe, expect, it } from "bun:test";
import { sayHello } from "../src";

describe("Bun Test", () => {
  it("Bun support test", async () => {
    const response = sayHello("Danang");
    expect(response).toBe("Hello Danang");
  });
});
