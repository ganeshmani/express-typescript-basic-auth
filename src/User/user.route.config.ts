import { RouteConfig } from "../Common/common.route.config";
import express, { Application, Request, Response } from "express";
import UserController from "./user.controller";

export class UserRoutes extends RouteConfig {
  constructor(app: Application) {
    super(app, "UserRoutes");
  }

  configureRoutes() {
    this.app.route(`/users`).get([UserController.getUsers]);

    return this.app;
  }
}
