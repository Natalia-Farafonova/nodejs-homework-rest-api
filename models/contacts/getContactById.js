const listContacts = require('./listContacts'); 

const getContactById = async (contactId) => {
  const contacts = await listContacts();
    const [contact] = contacts.filter((contact) => contact.id === contactId);
    return contact;
}; 

module.exports = getContactById;