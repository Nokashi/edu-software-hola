const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    first_name: {type: String, required: true, maxLength: 100},
    surname: {type: String, required: true, maxLength: 100},
    email: {type: String, required: true, unique: true},
    year_of_birth: {type: Number},
    average_grade: {type: Number, default: 0},
    performance_history: [{
        quiz_chapter: {type: Number, required: true},
        grade: {type: Number, required: true},
        quiz_date: {type: Date, default: Date.now}, 
    }]
})

UserSchema.plugin(passportLocalMongoose);

UserSchema.virtual("name").get(function () {
    return `${first_name} ${surname}`;
});

UserSchema.virtual("url").get(function() {
    return `/users/${this._id}`;
});



module.exports = mongoose.model("User", UserSchema);
