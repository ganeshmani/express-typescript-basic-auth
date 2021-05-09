import { RouteConfig } from "../Common/common.route.config";
import express, { Application, Request, Response } from "express";
import JWT from "../Common/middlewares/JWT";
import UserController from "./user.controller";
export class UserRoutes extends RouteConfig {
  constructor(app: Application) {
    super(app, "UserRoutes");
  }

  configureRoutes() {
    this.app.route(`/user`).get([JWT.authenticateJWT, UserController.getUser]);

    return this.app;
  }
}
