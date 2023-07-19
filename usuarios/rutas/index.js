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
const express_1 = require("express");
const users_1 = __importDefault(require("../modulos/users"));
const router = (0, express_1.Router)();
router.get("/Rutas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.default.find();
    res.send(user);
}));
router.post("/Rutas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, direccion, correo } = req.body;
    const user = new users_1.default({ nombre, apellido, direccion, correo });
    yield user.save();
    res.json(user);
}));
router.get("/Rutas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.default.findById(req.params.id);
    res.send(user);
}));
router.delete("/Rutas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.default.findByIdAndDelete(req.params.id);
    return res.json(user);
}));
router.put("/Rutas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(user);
}));
exports.default = router;
