// populateUsers.js

const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust the path as per your project structure

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/edu-software-hola')
    // mongoose.connect(process.env.MONGO_URI)
}
  

connectDB();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    // Dummy users data
    const dummyUsers = [
        {
            first_name: 'John',
            surname: 'Doe',
            email: 'john.doe@example.com',
            username: 'john_doe',
            year_of_birth: 1990,
            password: 'password1', // Plain text password (will be hashed)
            average_grade: 85,
            performance_history: [
                { quiz_chapter: 1, grade: 80 },
                { quiz_chapter: 2, grade: 90 },
                { quiz_chapter: 3, grade: 85 }
            ]
        },
        {
            first_name: 'Jane',
            surname: 'Smith',
            email: 'jane.smith@example.com',
            username: 'jane_smith',
            year_of_birth: 1985,
            password: 'password2', // Plain text password (will be hashed)
            average_grade: 78,
            performance_history: [
                { quiz_chapter: 1, grade: 75 },
                { quiz_chapter: 2, grade: 80 },
                { quiz_chapter: 3, grade: 80 }
            ]
        },
        {
            first_name: 'Alice',
            surname: 'Johnson',
            email: 'alice.johnson@example.com',
            username: 'alice_johnson',
            year_of_birth: 1992,
            password: 'password3',
            average_grade: 88,
            performance_history: [
                { quiz_chapter: 1, grade: 85 },
                { quiz_chapter: 2, grade: 90 },
                { quiz_chapter: 3, grade: 89 }
            ]
        },
        {
            first_name: 'Bob',
            surname: 'Brown',
            email: 'bob.brown@example.com',
            username: 'bob_brown',
            year_of_birth: 1988,
            password: 'password4',
            average_grade: 92,
            performance_history: [
                { quiz_chapter: 1, grade: 90 },
                { quiz_chapter: 2, grade: 93 },
                { quiz_chapter: 3, grade: 92 }
            ]
        },
        {
            first_name: 'Charlie',
            surname: 'Davis',
            email: 'charlie.davis@example.com',
            username: 'charlie_davis',
            year_of_birth: 1995,
            password: 'password5',
            average_grade: 76,
            performance_history: [
                { quiz_chapter: 1, grade: 70 },
                { quiz_chapter: 2, grade: 80 },
                { quiz_chapter: 3, grade: 78 }
            ]
        },
        {
            first_name: 'David',
            surname: 'Evans',
            email: 'david.evans@example.com',
            username: 'david_evans',
            year_of_birth: 1991,
            password: 'password6',
            average_grade: 81,
            performance_history: [
                { quiz_chapter: 1, grade: 78 },
                { quiz_chapter: 2, grade: 85 },
                { quiz_chapter: 3, grade: 80 }
            ]
        },
        {
            first_name: 'Eva',
            surname: 'Martinez',
            email: 'eva.martinez@example.com',
            username: 'eva_martinez',
            year_of_birth: 1987,
            password: 'password7',
            average_grade: 90,
            performance_history: [
                { quiz_chapter: 1, grade: 88 },
                { quiz_chapter: 2, grade: 91 },
                { quiz_chapter: 3, grade: 90 }
            ]
        },
        {
            first_name: 'Frank',
            surname: 'White',
            email: 'frank.white@example.com',
            username: 'frank_white',
            year_of_birth: 1984,
            password: 'password8',
            average_grade: 83,
            performance_history: [
                { quiz_chapter: 1, grade: 80 },
                { quiz_chapter: 2, grade: 85 },
                { quiz_chapter: 3, grade: 84 }
            ]
        },
        {
            first_name: 'Grace',
            surname: 'Hill',
            email: 'grace.hill@example.com',
            username: 'grace_hill',
            year_of_birth: 1993,
            password: 'password9',
            average_grade: 87,
            performance_history: [
                { quiz_chapter: 1, grade: 85 },
                { quiz_chapter: 2, grade: 88 },
                { quiz_chapter: 3, grade: 86 }
            ]
        },
        {
            first_name: 'Hannah',
            surname: 'King',
            email: 'hannah.king@example.com',
            username: 'hannah_king',
            year_of_birth: 1994,
            password: 'password10',
            average_grade: 79,
            performance_history: [
                { quiz_chapter: 1, grade: 75 },
                { quiz_chapter: 2, grade: 80 },
                { quiz_chapter: 3, grade: 82 }
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
