"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBookController = void 0;
const tsyringe_1 = require("tsyringe");
const AddBookHandler_1 = require("../../Book/Application/AddBook/AddBookHandler");
const AddBookCommand_1 = require("../../Book/Application/AddBook/AddBookCommand");
const http_status_1 = __importDefault(require("http-status"));
let AddBookController = class AddBookController {
    constructor(handler) {
        this.handler = handler;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, title } = req.body;
                const command = new AddBookCommand_1.AddBookCommand(id, title);
                yield this.handler.run(command);
                res.status(http_status_1.default.CREATED).json();
            }
            catch (e) {
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(e);
            }
        });
    }
};
exports.AddBookController = AddBookController;
exports.AddBookController = AddBookController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [AddBookHandler_1.AddBookHandler])
], AddBookController);
