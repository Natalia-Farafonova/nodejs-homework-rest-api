const contactModel = require("../../models/contacts/index");  

const postContactController = async (req, res, next) => {
    const contact = await contactModel.addContact(req.body)
    res.status(201).json({ status: 'success', code: 201, payload: { contact } })
}; 

module.exports = postContactController;