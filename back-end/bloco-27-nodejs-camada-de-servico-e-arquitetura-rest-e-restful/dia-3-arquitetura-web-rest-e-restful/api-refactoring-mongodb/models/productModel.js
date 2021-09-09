const {ObjectId} = require('mongodb');
const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const db =  await connection();
    
    await db.collection('products').insertOne({name, brand})

    return ({name, brand});
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const db =  await connection();
    
    return await db.collection('products').find().toArray();
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    if(!ObjectId.isValid(id)) return null;
    const db =  await connection();
    
    return await db.collection('products').findOne({_id: ObjectId(id)});
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    if(!ObjectId.isValid(id)) return null;

    const db =  await connection();
    
    return await db.collection('products').updateOne({_id: ObjectId(id)}, {$set: {name, brand}});
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    if(!ObjectId.isValid(id)) return null;
   
    const db =  await connection();
    
    return await db.collection('products').deleteOne({_id: ObjectId(id)});
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };