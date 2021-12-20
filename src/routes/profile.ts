import express, { Router } from "express";

const profileRouter: Router = express.Router();

profileRouter.get("/reservations", (_req, res) => {
	res.render("reservations", { activePage: "RESERVATIONS" });
});

export default profileRouter;
