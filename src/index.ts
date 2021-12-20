import express, { Express } from "express";
import path from "path";
import profileRouter from "./routes/profile";

const app: Express = express();
const PORT = 3000;

// serve static css files
app.use(express.static("public"));

// EJS configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
	res.render("index", { activePage: "HOME" });
});

app.get("/login", (_req, res) => {
	res.render("login");
});

app.use("/profile", profileRouter);

app.listen(PORT, () => console.log("app running in port " + PORT));
