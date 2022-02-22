const getContacts = require('./getContacts');
const getContactByIdController = require('./getContactByIdController'); 
const postContactController = require('./postContactController'); 
const deleteContactController = require('./deleteContactController'); 
const putContactController = require('./putContactController');


 module.exports = {
     getContacts, 
     getContactByIdController, 
     postContactController, 
     deleteContactController, 
     putContactController,
  
};