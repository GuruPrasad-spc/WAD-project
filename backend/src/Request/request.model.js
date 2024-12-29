// models/Request.js
import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  title: String,
  email: String,
  isbn: String,
  author: String,
});

const Request = mongoose.model('Request', requestSchema);

export default Request;