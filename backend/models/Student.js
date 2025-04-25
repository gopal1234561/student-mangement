const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  course: {
    type: String,
    required: true,
    trim: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
