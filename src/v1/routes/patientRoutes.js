const express = require('express');
const router = express.Router();
const patientController = require('../../controllers/patientController')

/**
 * @swagger
 *components:
 *  schemas:
 *    patientSchema:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          example: "dfg452"
 *        patient:
 *          type: string
 *          example: "Daniel Pérez Vitola"
 *        documentType:
 *          type: string  
 *          example: "CC"
 *        document:
 *          type: string
 *          example: "1103119753" 
 *        email:
 *          type: string 
 *          example: "dapevi97@gmail.com"
 *        address:
 *          type: string 
 *          example: "Calle 55#67B-160"
 *        dentist:
 *          type: string
 *          example: "Gilberto Bermúdez"
 *        bloodType:
 *          type: string
 *          example: "O+"
 *        treatment:
 *          type: string
 *          example: "Blanqueamiento dental"
 *        price:
 *          type: number
 *          example: 50000
 *        state:
 *          type: number
 *          example: 200000
 */

/**
 * @swagger
 * /api/v1/patients/list:
 *   get:
 *     summary: Return all patients
 *     responses:
 *       200: 
 *         description: All patients   
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/patientSchema'
 */ 
router
.get("/list", patientController.getAllPatients)
/**
 * @swagger
 * /api/v1/patients/save:
 *   post:
 *     summary: Create a new patient
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema: 
 *             type: object
 *             $ref: '#components/schemas/patientSchema' 
 *     responses:
 *       200: 
 *         description: New user created   
 */
.post('/save', patientController.savePatient)
/**
 * @swagger
 * /api/v1/patients/update/{_id}:
 *   put:
 *     summary: Update patient
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema: 
 *             type: object
 *             $ref: '#components/schemas/patientSchema' 
 *     responses:
 *       200: 
 *         description: User updated  
 *     parameters:
 *       - in : path 
 *         name: _id 
 *         schema:
 *           type: string
 */
.put("/update/:_id", patientController.updatePatient)
/**
 * @swagger
 * /api/v1/patients/delete/{_id}:
 *   delete:
 *     summary: Delete patient (logic)
 *     responses:
 *       200: 
 *         description: User deleted  
 *     parameters:
 *       - in : path 
 *         name: _id 
 *         schema:
 *           type: string
 * 
 */
.delete("/delete/:id", patientController.deletePatient);

module.exports = router;