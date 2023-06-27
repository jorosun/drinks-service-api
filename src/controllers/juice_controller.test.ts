import request from "supertest";
import { app } from "../app";

test("GET /juice with no param should return correct object", async () => {
  const res = await request(app).get("/juice");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Juice",
    name: "Orange",
  });
});

test("GET /juice should return correct object", async () => {
  const res = await request(app).get("/juice").query({ juiceName: "Orange" });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Juice",
    name: "Orange",
  });
});

test("GET /juice with a parameter should return correct object", async () => {
  const res = await request(app)
    .get("/juice")
    .query({ juiceName: "Pineapple" });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Juice",
    name: "Pineapple",
  });
});
