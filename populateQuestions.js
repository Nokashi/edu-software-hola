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
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Who discovered penicillin?',
            options: ['Alexander Fleming', 'Marie Curie', 'Albert Einstein', 'Isaac Newton'],
            correctAnswer: 'Alexander Fleming'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Which planet is known as the Red Planet?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 'Mars'
        },
        {
            chapter: 3,
            difficulty_level: 'Medium',
            text: 'Who wrote the play "Romeo and Juliet"?',
            options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
            correctAnswer: 'William Shakespeare'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: 'What is the largest organ in the human body?',
            options: ['Liver', 'Heart', 'Lung', 'Skin'],
            correctAnswer: 'Skin'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
            correctAnswer: 'Leonardo da Vinci'
        },
        {
            chapter: 1,
            difficulty_level: 'Medium',
            text: 'What year did the Titanic sink?',
            options: ['1912', '1907', '1923', '1898'],
            correctAnswer: '1912'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'What is the unit of electric current?',
            options: ['Volt', 'Watt', 'Ampere', 'Ohm'],
            correctAnswer: 'Ampere'
        },
        {
            chapter: 3,
            difficulty_level: 'Medium',
            text: 'Who invented the telephone?',
            options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
            correctAnswer: 'Alexander Graham Bell'
        },
        // New questions
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'What is the chemical symbol for water?',
            options: ['H2O', 'O2', 'CO2', 'NaCl'],
            correctAnswer: 'H2O'
        },
        {
            chapter: 4,
            difficulty_level: 'Medium',
            text: 'Who is known as the father of modern physics?',
            options: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Galileo Galilei'],
            correctAnswer: 'Albert Einstein'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'What is the powerhouse of the cell?',
            options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
            correctAnswer: 'Mitochondria'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'What is the largest planet in our solar system?',
            options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
            correctAnswer: 'Jupiter'
        },
        {
            chapter: 4,
            difficulty_level: 'Medium',
            text: 'Who wrote "1984"?',
            options: ['George Orwell', 'Aldous Huxley', 'F. Scott Fitzgerald', 'J.K. Rowling'],
            correctAnswer: 'George Orwell'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'What is the hardest natural substance on Earth?',
            options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
            correctAnswer: 'Diamond'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'What is the main ingredient in guacamole?',
            options: ['Tomato', 'Onion', 'Avocado', 'Garlic'],
            correctAnswer: 'Avocado'
        },
        {
            chapter: 1,
            difficulty_level: 'Medium',
            text: 'What is the speed of light?',
            options: ['299,792 km/s', '150,000 km/s', '300,000 km/s', '100,000 km/s'],
            correctAnswer: '299,792 km/s'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Who developed the theory of relativity?',
            options: ['Isaac Newton', 'Nikola Tesla', 'Albert Einstein', 'Stephen Hawking'],
            correctAnswer: 'Albert Einstein'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'What is the smallest unit of life?',
            options: ['Cell', 'Molecule', 'Atom', 'Organ'],
            correctAnswer: 'Cell'
        },
        {
            chapter: 2,
            difficulty_level: 'Medium',
            text: 'What is the main gas found in the air we breathe?',
            options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
            correctAnswer: 'Nitrogen'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Who was the first person to walk on the moon?',
            options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'Michael Collins'],
            correctAnswer: 'Neil Armstrong'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'What is the most abundant gas in the Earth\'s atmosphere?',
            options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
            correctAnswer: 'Nitrogen'
        },
        {
            chapter: 3,
            difficulty_level: 'Medium',
            text: 'Which planet is closest to the sun?',
            options: ['Earth', 'Venus', 'Mercury', 'Mars'],
            correctAnswer: 'Mercury'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: 'What is the capital of Japan?',
            options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
            correctAnswer: 'Tokyo'
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
