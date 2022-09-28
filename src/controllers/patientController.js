const patientSchema = require('../models/patientSchema')



const getAllPatients = async (req, res) => {
    try {
        const patients = await patientSchema.find({});
        res.json(patients);
    } catch (error) {
        res.json({ message: "Patients not found" });

    }

}

const savePatient = async (req, res) => {
    const patient = new patientSchema({
        _id: req.body._id,
        patient: req.body.patient,
        documentType: req.body.documentType,
        document: req.body.document,
        email: req.body.email,
        address: req.body.address,
        dentist: req.body.dentist,
        bloodType: req.body.bloodType,
        treatment: req.body.treatment,
        price: req.body.price,
        state: req.body.state
    });

    try {
        await patient.save();

        res.json({ message: "Patient saved" });
    } catch (error) {
        res.json({ message: "Validate fields" })
    }


}


const updatePatient = (req, res) => {
    patientSchema.findByIdAndUpdate(req.params._id, {

        patient: req.body.patient,
        documentType: req.body.documentType,
        document: req.body.document,
        email: req.body.email,
        address: req.body.address,
        dentist: req.body.dentist,
        bloodType: req.body.bloodType,
        treatment: req.body.treatment,
        price: req.body.price,
        state: req.body.state
    })
        .then(result => res.json(result))
        .catch(err => res.json(err));
}

const deletePatient = (req, res) => {
    patientSchema.deleteById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}

module.exports = {
    getAllPatients,
    savePatient,
    updatePatient,
    deletePatient
}