import request from "supertest";
import { app } from "../app";

test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Breakfast" });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Breakfast",
  });
});
test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Earl Grey" });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Earl Grey",
  });
});
