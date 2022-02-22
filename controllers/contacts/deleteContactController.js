const contactModel = require("../../models/contacts/index");  


const deleteContactController =  async (req, res, next) => {
    const contact = await contactModel.removeContact(req.params.contactId)
    if (contact) {
        return res.json({ status: 'success', code: 200, payload: { contact } })
    }
    return res
        .status(404)
        .json({ status: 'error', code: 404, message: 'Not Found' })
}; 

module.exports = deleteContactController;