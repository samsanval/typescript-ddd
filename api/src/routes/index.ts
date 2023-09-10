import { Router } from 'express';

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

export function registerRoutes(router: Router): void {
  const routes = ['./example.route.ts', './book.routes.ts'];
  routes.map((route) => register(route, router));
}
