const mongoose = require('mongoose');
const Question = require('./models/question'); // Adjust the path as per your project structure


async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/edu-software-hola')
}
  

connectDB();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    // Dummy questions data
    const dummyQuestions = [
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'What is the capital of France?',
            options: ['Paris', 'Berlin', 'London', 'Rome'],
            correctAnswer: 'Paris'
        },
        {
            chapter: 2,
            difficulty_level: 'Medium',
            text: 'What is the largest ocean on Earth?',
            options: ['Atlantic', 'Arctic', 'Indian', 'Pacific'],
            correctAnswer: 'Pacific'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Who discovered penicillin?',
            options: ['Alexander Fleming', 'Marie Curie', 'Albert Einstein', 'Isaac Newton'],
            correctAnswer: 'Alexander Fleming'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Which planet is known as the Red Planet?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 'Mars'
        },
        {
            chapter: 5,
            difficulty_level: 'Medium',
            text: 'Who wrote the play "Romeo and Juliet"?',
            options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
            correctAnswer: 'William Shakespeare'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'What is the largest organ in the human body?',
            options: ['Liver', 'Heart', 'Lung', 'Skin'],
            correctAnswer: 'Skin'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
            correctAnswer: 'Leonardo da Vinci'
        },
        {
            chapter: 4,
            difficulty_level: 'Medium',
            text: 'What year did the Titanic sink?',
            options: ['1912', '1907', '1923', '1898'],
            correctAnswer: '1912'
        },
        {
            chapter: 5,
            difficulty_level: 'Hard',
            text: 'What is the unit of electric current?',
            options: ['Volt', 'Watt', 'Ampere', 'Ohm'],
            correctAnswer: 'Ampere'
        },
        {
            chapter: 1,
            difficulty_level: 'Medium',
            text: 'Who invented the telephone?',
            options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
            correctAnswer: 'Alexander Graham Bell'
        }
    ];

    try {
        // Insert dummy questions into the database
        const insertedQuestions = await Question.insertMany(dummyQuestions);
        console.log('Dummy questions inserted successfully:', insertedQuestions);
    } catch (err) {
        console.error('Error inserting dummy questions:', err);
    } finally {
        // Close MongoDB connection
        mongoose.connection.close();
    }
});
