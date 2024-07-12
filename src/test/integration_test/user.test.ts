import request from "supertest";

import express from "express";
import router from "../../routes";
import { users } from "../../models/user";
import expect from "expect";

describe("User Integration Test Suite", () => {
  const app = express();

  app.use(express.json());
  app.use(router);

  describe("Create user API Test", () => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbInVzZXJzLmNyZWF0ZSIsInVzZXJzLnVwZGF0ZSIsInVzZXJzLmRlbGV0ZSIsInVzZXJzLmZldGNoIiwidG9kb3MuY3JlYXRlIiwidG9kb3MudXBkYXRlIiwidG9kb3MuZGVsZXRlIiwidG9kb3MuZmV0Y2giXSwiaWF0IjoxNzIwNzY0NTEyLCJleHAiOjE3MjA3NjQ2OTJ9.2rH49IdC--Cfw4uiHqkonwy987AyrI8TxhSN1ZoegAg";
    it("Should create a new user", async () => {
      const response = await request(app)
        .post("/users")
        .set(
          "Authorization",
          `Bearer ${token}`
        )
        .send({
          id: "2",
          name: "test 1",
          email: "test1@gmail.com",
          password: "test9803",
          permissions: [
            "todos.create",
            "todos.update",
            "todos.delete",
            "todos.fetch",
          ],
        });
      expect(201).toBe(response.status);
    });
  });
});
