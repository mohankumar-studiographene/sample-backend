import { Application } from "express";
import BaseRoute from "./base.route";
import UserRoute from "./user.route";
export class Routes {
  constructor() {}
  public routes(app: Application): void {
    // resource and routes mapping comes here
    app.use("/user", UserRoute);
    app.use(BaseRoute);
  }
}
