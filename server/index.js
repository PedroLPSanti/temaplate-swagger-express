var express = require("express");
var swaggerJsDoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const consign = require('consign');
var app = express();
var port = 3000;
var swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Customer API",
            description: "Customer API Information",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:3000"]
        }
    },
    // ['.routes/*.js']
    apis: ["api/*.js"]
};
var swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
consign()
  .include('middleware')
  .then('controllers')
  .then('paths')
  .into(app);

app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
