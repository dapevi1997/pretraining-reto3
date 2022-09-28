const path = require('path');

const swaggerSpec = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API with MongoDB and Node.js",
        version: "1.0.0"
      }
  
    },
    apis: [`${path.join(__dirname,"../src/v1/routes/*.js")}`]
  }

  module.exports = swaggerSpec;