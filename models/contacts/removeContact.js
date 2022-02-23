const listContacts = require('./listContacts');
const DB = require('../../db/db');
const db = new DB('contacts.json'); 

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId)
  if (index !== -1) {
    const [contact] = contacts.splice(index, 1)
    await db.write(contacts)
    return contact
  }
  return null
}; 

module.exports = removeContact;