import express from "express";
import * as coffeeController from "../controllers/coffee_controller";
import * as teaController from "../controllers/tea_controller";
import * as juiceController from "../controllers/juice_controller";

export const router = express.Router();
router.get("/coffee", coffeeController.getCoffee);
router.get("/tea", teaController.getTea);
router.get("/juice", juiceController.getJuice);
