const express = require('express') 

const contactModel = require("../../models/contacts/index"); 

const { getContacts,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController, } = require('../../controllers/contacts');
const { contactSchema } = require("../../schemas/contacts-validation-schemes");
const { validateBody } = require('../../middlewares/validation'); 



const router = express.Router()

router.get('/', getContacts);

router.get('/:contactId', getContactByIdController);

router.post('/', validateBody(contactSchema), postContactController);

router.delete('/:contactId', deleteContactController);

router.put('/:contactId', validateBody(contactSchema), putContactController); 



module.exports = router
