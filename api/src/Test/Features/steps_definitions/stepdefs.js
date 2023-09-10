"use strict";
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
const cucumber_1 = require("@cucumber/cucumber");
const assert_1 = __importDefault(require("assert"));
const pactum_1 = require("pactum");
let response;
(0, cucumber_1.When)('I made a request to {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        response = yield (0, pactum_1.spec)().get(string);
    });
});
(0, cucumber_1.Then)('The response status is {int}', function (int) {
    // Then('The response status is {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    assert_1.default.equal(response.status, int);
});
(0, cucumber_1.Then)('The body response should be:', function (docString) {
    // Write code here that turns the phrase above into concrete actions
    return docString;
});
