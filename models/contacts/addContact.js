const listContacts = require('./listContacts');
const { v4 } = require("uuid");
const DB = require('../../db/db');
const db = new DB('contacts.json'); 



const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = {
    ...body,
    id: v4()
  };
  contacts.push(newContact);
  await db.write(contacts);
  return newContact;

};  

module.exports = addContact;