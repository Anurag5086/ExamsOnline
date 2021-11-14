const express = require("express");
const mongoose = require("mongoose");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// require routes
const routes = require("./routes");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "ExmasOnline API",
      description: "ExamsOnline API Information",
      contact: {
        name: "Anurag Gupta",
      },
      servers: ["http://localhost:5000/"],
    },
  },
  apis: ["./routes/*.js"],
};

// Swagger-route
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

// config routes
app.use("/api", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Sever Started on Port 5000!"));
