const mongoose = require('mongoose');
const Scenario = require('./models/scenario'); // Adjust the path as per your project structure


async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/edu-software-hola')
}
  

connectDB();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    const scenarios = [
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: ["You are at a restaurant in Spain and want to order a meal. The waiter asks: '¿Qué desea comer?'"],
            options: ["Paella", "Pizza", "Hamburger", "Tacos"],
            correctAnswer: "Paella"
        },
        {
            chapter: 1,
            difficulty_level: 'Medium',
            text: ["You need to find the nearest pharmacy. You approach a local and ask: '¿Dónde está la farmacia más cercana?'"],
            options: ["It is near the park.", "The pharmacy is closed.", "I don't know.", "It is over there."],
            correctAnswer: "It is near the park."
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: ["You lost your wallet in a crowded market. You explain the situation to a police officer: 'Perdí mi cartera en el mercado. ¿Puede ayudarme?'"],
            options: ["Sure, I can help you.", "You should go to the bank.", "I am not from here.", "I can't help you."],
            correctAnswer: "Sure, I can help you."
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: ["You want to buy a souvenir. The shopkeeper asks: '¿Qué tipo de recuerdo le gustaría comprar?'"],
            options: ["A keychain", "A hat", "A bottle of water", "A map"],
            correctAnswer: "A keychain"
        },
        {
            chapter: 2,
            difficulty_level: 'Medium',
            text: ["You are at a museum and need to find the restroom. You ask a staff member: '¿Dónde están los baños?'"],
            options: ["The restrooms are on the left.", "The restrooms are closed.", "The museum is big.", "I am not sure."],
            correctAnswer: "The restrooms are on the left."
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: ["You are checking into a hotel and need to ask about breakfast times. You ask the receptionist: '¿A qué hora se sirve el desayuno?'"],
            options: ["Breakfast is served from 7 am to 10 am.", "The restaurant is closed.", "You can have dinner at 8 pm.", "I don't know."],
            correctAnswer: "Breakfast is served from 7 am to 10 am."
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: ["You are in a taxi and want to go to the airport. You tell the driver: 'Por favor, lléveme al aeropuerto.'"],
            options: ["Take me to the airport.", "Take me to the hotel.", "Take me to the beach.", "Take me to the restaurant."],
            correctAnswer: "Take me to the airport."
        },
        {
            chapter: 3,
            difficulty_level: 'Medium',
            text: ["You need to exchange currency at a bank. You ask the teller: '¿Cuál es la tasa de cambio?'"],
            options: ["What is the exchange rate?", "What is the time?", "What is the weather?", "What is the fee?"],
            correctAnswer: "What is the exchange rate?"
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: ["You want to make a reservation at a popular restaurant. You call and say: 'Me gustaría hacer una reserva para esta noche.'"],
            options: ["I would like to make a reservation for tonight.", "I would like to cancel my reservation.", "I would like to order food.", "I would like to change my reservation."],
            correctAnswer: "I would like to make a reservation for tonight."
        }
    ];

    try {
        // Insert dummy questions into the database
        const insertedScenarios = await Scenario.insertMany(scenarios);
        console.log('Dummy scenarios inserted successfully:', insertedScenarios);
    } catch (err) {
        console.error('Error inserting dummy scenarios:', err);
    } finally {
        // Close MongoDB connection
        mongoose.connection.close();
    }
});
