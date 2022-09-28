const express = require('express');
const v1PatientRouter = require('./v1/routes/patientRoutes');
const mongoDB = require('./database/mongoDB');
const swaggerSpec = require('../swagger/swagger-conf');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


mongoDB.connect();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1/patients', v1PatientRouter);
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)));

app.listen(PORT, ()=>{ console.log(`Server listening on port ${PORT}`)});
