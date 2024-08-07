const express = require("express")
const app = express();
const PUERTO = 8080;
const productRouter = require("./routes/products.router.js")
const cartRouter = require("./routes/carts.router.js")

// middelware
app.use(express.json());
// le aviso al server que voy a usar formato  json

app.use("/products",productRouter);
app.use("/carts",cartRouter);


app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
 