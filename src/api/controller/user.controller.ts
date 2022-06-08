import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";
import { UserService } from "@service/user.service";

export class UserController {
  private responseParser: ResponseParser;
  private userService: UserService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.userService = new UserService();
  }

  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    const page: number = req.query.page ? Number(req.query.page) : null;
    const size: number = req.query.size ? Number(req.query.size) : null;
    const order: string = req.query.order ? String(req.query.order) : "DESC";
    const response = await this.userService.getAllUsers(page, size, order);
    return this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("got_all_users"))
      .send(res);
  };

  public getUserById = async (req: Request, res: Response): Promise<void> => {
    const userId: string = req.query.orderId as string;
    const response = await this.userService.getUserById(userId);
    return this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("got_user"))
      .send(res);
  };

  public updateUser = async (req: Request, res: Response): Promise<void> => {
    const response = await this.userService.updateUser(req.body);
    return this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("update_the_user"))
      .send(res);
  };

  public createUser = async (req: Request, res: Response): Promise<void> => {
    const response = await this.userService.createUser(req.body);
    return this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("update_the_user"))
      .send(res);
  };
}
