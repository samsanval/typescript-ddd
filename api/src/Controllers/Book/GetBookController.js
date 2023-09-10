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
const GetBookHandler_1 = require("../../Book/Application/GetBook/GetBookHandler");
const GetBookQuery_1 = require("../../Book/Application/GetBook/GetBookQuery");
const http_status_1 = __importDefault(require("http-status"));
const BookNotExists_1 = require("../../Book/Domain/BookNotExists");
const tsyringe_1 = require("tsyringe");
let GetBookController = class GetBookController {
    constructor(handler) {
        this.handler = handler;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const query = new GetBookQuery_1.GetBookQuery(id);
            try {
                const book = yield this.handler.run(query);
                res.status(http_status_1.default.OK).json(book);
            }
            catch (e) {
                if (e instanceof BookNotExists_1.BookNotExists) {
                    res.status(http_status_1.default.NOT_FOUND).json(e.message);
                }
                else {
                    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json(e);
                }
            }
        });
    }
};
GetBookController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [GetBookHandler_1.GetBookHandler])
], GetBookController);
exports.default = GetBookController;
