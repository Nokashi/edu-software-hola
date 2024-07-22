const chapter5_theory = [
    "When dining in Spain, it's essential to know basic phrases for ordering food and drinks. Learn how to ask for a table ('¿Tiene una mesa disponible?'), request a menu ('La carta, por favor'), order food ('Quisiera...'), and ask about ingredients ('¿Qué lleva este plato?'). Familiarize yourself with common dishes and local specialties to enhance your culinary experience.",
    "Navigating Spanish cities requires asking for directions ('¿Dónde está...?'). Learn how to inquire about the location of landmarks ('¿Dónde está la plaza mayor?'), find transportation hubs ('¿Dónde está la estación de tren?'), and get assistance with street names and addresses ('¿Cómo llego a...?'). Understanding directional phrases ('a la derecha', 'a la izquierda', 'recto') helps you navigate confidently.",
    "Exploring Spanish markets and shops involves interacting in Spanish. Learn how to ask about prices ('¿Cuánto cuesta?'), request sizes ('¿Tiene una talla más grande?'), negotiate ('¿Me puede hacer un descuento?'), and express preferences ('Me gusta este color'). Practice essential shopping phrases to enjoy shopping for souvenirs and local products.",
    "Planning activities in Spain often requires making reservations. Learn how to reserve a hotel room ('Quiero reservar una habitación'), book tickets ('Quisiera comprar entradas'), and secure spots for tours or events ('¿Puedo reservar para mañana?'). Understanding reservation etiquette and confirming details ensures smooth travel experiences.",
    "In unforeseen circumstances, asking for help in Spanish is essential. Learn how to seek assistance in emergencies ('¡Ayuda! Necesito una ambulancia'), request information ('¿Puede ayudarme?'), and express urgency ('Es urgente'). Mastering basic phrases for seeking help ensures safety and support during your travels.",
];

let currentChapter = 0;

function showQuizButton() {
    const chapterContent = document.getElementById('buttons');
    const quizButton = document.createElement('button');
    quizButton.className = 'buttonSeeMore';
    quizButton.textContent = 'Take Quiz for this Chapter';
    quizButton.onclick = function() {
        window.location.href = '/quizzes/4';
    };
    chapterContent.appendChild(quizButton);
    quizButton.scrollIntoView({ behavior: 'smooth' });
}

function showNextChapter() {
    if (currentChapter < chapter5_theory.length) {
        const contentDiv = document.getElementById('content');
        const newDiv = document.createElement('div');
        newDiv.classList.add('chapter');
        newDiv.innerHTML = chapter5_theory[currentChapter];
        contentDiv.appendChild(newDiv);
        newDiv.scrollIntoView({ behavior: 'smooth' });
        currentChapter++;
        if (currentChapter == chapter5_theory.length)
        {
            showQuizButton();
        }
    } else {
        alert("No more chapters to display.");
    }
}



document.getElementById('nextChapterButton').addEventListener('click', showNextChapter);
document.addEventListener('DOMContentLoaded', showNextChapter);