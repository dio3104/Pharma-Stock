import { Router } from "express";

import products from "./app/contollers/ProductsController";

const routes = new Router();

routes.get("/products", products.index);
routes.get("/products/:id", products.show);
routes.post("/products", products.create);
routes.put("/products/:id", products.update);
routes.delete("/products/:id", products.destroy);
    

export default routes;