import express from "express";
import { UserController } from "@api/controller/user.controller";
import { HttpRequestValidator } from "@middleware/http-request-validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import { UserValidator } from "@api/validator/user.validator";

class UserRoute {
  public router: express.Router = express.Router();
  private userController: UserController;
  private httpRequestValidator: HttpRequestValidator;
  private authenticate;

  constructor() {
    this.userController = new UserController();
    this.httpRequestValidator = new HttpRequestValidator();
    const authMiddleware = new AuthenticateRequest();
    this.authenticate = authMiddleware.validate;
    this.assign();
  }

  private assign() {
    this.router.get(
      "/",
      this.httpRequestValidator.validate("query", UserValidator.pagination),
      this.userController.getAllUsers
    );

    this.router.post(
      "/",
      this.httpRequestValidator.validate("body", UserValidator.updateUser),
      this.userController.updateUser
    );

    this.router.post(
      "/create",
      this.httpRequestValidator.validate("body", UserValidator.user),
      this.userController.createUser
    );

    this.router.get("/:id", this.userController.getUserById);
  }
}

export default new UserRoute().router;
