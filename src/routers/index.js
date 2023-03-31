const authRoutes = require("./auth.routes");
const first = require("./first-practice.routes");
const complejoRoutes = require("./complejo.routes");
const userRoutes = require("./user.routes");
const sedeRoutes = require("./sede.routes");
const authMiddleware = require("../middlewares/auth.middleware");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes),
  app.use("/api/v1/operaciones", first),
  app.use("/api/v1/complejo", complejoRoutes),
  app.use("/api/v1/users", userRoutes),
  app.use("/api/v1/sede", sedeRoutes);
};

module.exports = routerApi;
