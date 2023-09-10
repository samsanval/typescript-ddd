"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const http_status_1 = __importDefault(require("http-status"));
const register = (router) => {
    router.get('/hello', (_, res) => res.status(http_status_1.default.OK).json('hello'));
};
exports.register = register;
