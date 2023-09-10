import 'reflect-metadata';
import express from 'express';
import Router from 'express-promise-router';
import * as http from 'http';
import { json } from 'body-parser';
import helmet from 'helmet';
import { registerRoutes } from './routes';
import createDependencies from './Shared/Infrastructure/Dependency';
import { Model } from 'objection';
import knex from 'knex';

export class Server {
  constructor(
    private readonly server: express.Express,
    private readonly port: string,
    private httpServer?: http.Server,
  ) {
    this.server.use(json());
    this.server.use(helmet.noSniff());
    Model.knex(knex(require('./knexfile')));
    createDependencies();
    const router = Router();
    registerRoutes(router);
    this.server.use(router);
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.server.listen(this.port, () => {
        console.log(
          `  Mock Backend App is running at http://localhost:${this.port}`,
        );
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }
}
