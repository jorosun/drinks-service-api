import request from "supertest";
import { app } from "../app";

test("GET /juice should return correct object", async () => {
  const res = await request(app).get("/juice").query({ coffeeName: "orange" });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Juice",
    name: "Orange",
  });
});
