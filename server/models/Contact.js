const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,  
  },
  message: {
    type: String,
    required: true,
    maxlength: 2000,  
  },
  createdAt: {
    type: Date,
    default: Date.now,  
  },
});

module.exports = mongoose.model('Contact', contactSchema);