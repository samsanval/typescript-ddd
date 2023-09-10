"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
function register(routePath, router) {
    const route = require(routePath);
    route.register(router);
}
function registerRoutes(router) {
    const routes = ['./example.route.ts', './book.routes.ts'];
    routes.map((route) => register(route, router));
}
exports.registerRoutes = registerRoutes;
