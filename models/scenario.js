const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScenarioSchema = new Schema({
    chapter: {type: Number, required: true, default: 0},
    difficulty_level: {type: String, enum: ['Easy', 'Medium', 'Hard'], required: true},
    text: [{ type: String, required: true }],
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true }
});
  
module.exports = mongoose.model('Scenario', ScenarioSchema);