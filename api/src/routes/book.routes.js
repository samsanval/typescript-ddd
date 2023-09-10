"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const tsyringe_1 = require("tsyringe");
const GetBookController_1 = __importDefault(require("../Controllers/Book/GetBookController"));
const AddBookController_1 = require("../Controllers/Book/AddBookController");
const register = (router) => {
    const getBookController = tsyringe_1.container.resolve(GetBookController_1.default);
    const addBookController = tsyringe_1.container.resolve(AddBookController_1.AddBookController);
    router.get('/book/:id', (req, res) => getBookController.run(req, res));
    router.post('/book', (req, res) => addBookController.run(req, res));
};
exports.register = register;
