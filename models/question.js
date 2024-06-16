const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    chapter: {type: Number, required: true},
    difficulty_level: {type: String, enum: ['Easy', 'Medium', 'Hard'], required: true},
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true }
});
  
module.exports = mongoose.model('Question', QuestionSchema);