import { Server } from './Server';
import express from 'express';

export class App {
  server?: Server;

  async start(): Promise<void> {
    const port = '3000';
    this.server = new Server(express(), port);

    return this.server.listen();
  }
}
