// const listContacts = require('./listContacts');
const { v4 } = require("uuid");
const DB = require('../../db/db');
const db = new DB('../../db/contacts.json'); 

const addContact = async (body) => {
  const contacts = await db.read();
  const newContact = {
    ...body,
    id: v4()
  };
  contacts.push(newContact);
  await db.write(contacts);
  return newContact;

};  

module.exports = addContact;