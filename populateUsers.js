// populateUsers.js

const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust the path as per your project structure
require('dotenv').config();

async function connectDB() {
    // await mongoose.connect('mongodb://localhost:27017/edu-software-hola')
    const connectionString = process.env.MONGO_URI
    mongoose.connect(connectionString)
}
  

connectDB();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    // Dummy users data
    const dummyUsers = [
        {
            first_name: 'Smarty',
            surname: 'McSmartyPants',
            email: 'i_am_smart@example.com',
            username: 'smartypants',
            year_of_birth: 2000,
            password: 'smart',
            average_grade: 95,
            performance_history: [
                { quiz_chapter: 1, grade: 95 },
                { quiz_chapter: 2, grade: 95 },
                { quiz_chapter: 3, grade: 95 },
                { quiz_chapter: 4, grade: 95 }
            ]
        }
    ];

    try {
        // Loop through dummyUsers and register each user
        for (let user of dummyUsers) {
            // Create a new user object
            const newUser = new User({
                first_name: user.first_name,
                surname: user.surname,
                email: user.email,
                username: user.username,
                year_of_birth: user.year_of_birth,
                average_grade: user.average_grade,
                performance_history: user.performance_history
            });

            // Register the user with passport-local-mongoose
            await User.register(newUser, user.password);
            console.log(`User ${user.email} registered successfully!`);
        }
    } catch (err) {
        console.error('Error registering users:', err);
    } finally {
        // Close MongoDB connection
        mongoose.connection.close();
    }
});
