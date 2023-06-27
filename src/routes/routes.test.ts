import request from "supertest";
import { app } from "../app";

test("GET /alcohol with no param should return empty body with code 404 Not found", async () => {
  const res = await request(app).get("/alcohol");
  expect(res.statusCode).toEqual(404);
  expect(res.body).toEqual({});
});
