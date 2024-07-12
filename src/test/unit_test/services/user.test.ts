import { add, createUser, getUserById } from "../../../services/user";
import sinon from "sinon";

import expect from "expect";

import * as UserModel from "../../../models/user";
import { NotFoundError } from "../../../error/not_found_error";
import bcrypt from "bcrypt";

describe("User Service Test Suite", () => {
  describe("Addition", () => {
    it("Should return the sum of two numbers", () => {
      const output = add(1, 2);

      expect(output).toBe(3);
    });
  });

  describe("Get user by id", () => {
    let userModelGetUserByIdStub: sinon.SinonStub;
    beforeEach(() => {
      userModelGetUserByIdStub = sinon
        .stub(UserModel, "getUserById")
        .returns(undefined);
    });

    afterEach(() => {
      userModelGetUserByIdStub.restore();
    });

    // not found error - test case
    it("Should throw error when user isn't found", () => {
      userModelGetUserByIdStub.returns(undefined);
      expect(() => getUserById("10")).toThrow(
        new NotFoundError("User not found.")
      );
    });

    // user found - test case
    it("Should return a user when user is found", () => {
      const user = {
        id: "1",
        name: "Test",
        email: "test@gmail.com",
        password: "test123",
        permissions: [],
      };
      userModelGetUserByIdStub.returns(user);

      const response = getUserById("1");

      expect(response.user).toStrictEqual(user);
    });
  });

  describe("Create user", () => {
    let bcryptHasStub: sinon.SinonStub;
    let userModelCreateUserStub: sinon.SinonStub;

    beforeEach(() => {
      bcryptHasStub = sinon.stub(bcrypt, "hash");
      userModelCreateUserStub = sinon.stub(UserModel, "createUser");
    });

    afterEach(() => {
      bcryptHasStub.restore();
      userModelCreateUserStub.restore();
    });

    it("Should create new user", async () => {
      bcryptHasStub.resolves("hashedPassword");

      const user = {
        id: "1",
        name: "Test",
        email: "test@gmail.com",
        password: "test123",
        permissions: [],
      };

      await createUser(user);

      expect(bcryptHasStub.callCount).toBe(1);
      expect(bcryptHasStub.getCall(0).args).toStrictEqual([user.password, 10]);

      expect(userModelCreateUserStub.callCount).toBe(1);
      expect(userModelCreateUserStub.getCall(0).args).toStrictEqual([
        { ...user, password: "hashedPassword" },
      ]);
    });
  });
});
