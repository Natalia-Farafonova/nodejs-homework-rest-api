const contactModel = require("../../models/contacts/index"); 

const getContacts=  async (req, res, next) => {
  const contacts = await contactModel.listContacts()
  res.json({
    status: "success",
    code: 200,
    payload: { contacts } 
  });
}; 

module.exports = getContacts;
