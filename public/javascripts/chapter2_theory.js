const chapter2_theory = [
    "Spain is renowned for its vibrant festivals and celebrations that reflect its rich cultural diversity. From the Running of the Bulls in Pamplona (San Fermín) to La Tomatina in Buñol and Semana Santa (Holy Week) celebrated across the country, these events showcase Spain's traditions and passion for festivities.",
    "Flamenco is a passionate and expressive art form originating from Andalusia, characterized by its intricate footwork, rhythmic guitar playing, soulful singing, and handclaps. It has deep cultural roots in Spanish history and remains an integral part of Spanish identity.",
    "Spanish cuisine is diverse and influenced by regional ingredients and historical encounters. Popular dishes include paella (from Valencia), tapas (small savory dishes), gazpacho (cold tomato soup), and churros (fried dough pastries). Food plays a central role in Spanish social gatherings and traditions.",
    "Bullfighting, known as corrida de toros in Spanish, is a traditional spectacle that has sparked both admiration and controversy. Originating from ancient rituals, bullfighting involves skilled matadors facing bulls in a ritualistic performance that blends artistry, courage, and cultural heritage.",
    "The siesta, a short afternoon nap, is a cherished tradition in Spain, especially in warmer regions. It reflects Spain's relaxed lifestyle and the practice of taking a break during the hottest part of the day. Additionally, Spain's cultural traditions encompass diverse customs, superstitions, and regional identities.",
];


let currentChapter = 0;

function showQuizButton() {
    const chapterContent = document.getElementById('buttons');
    const quizButton = document.createElement('button');
    quizButton.className = 'buttonSeeMore';
    quizButton.textContent = 'Take Quiz for this Chapter';
    quizButton.onclick = function() {
        window.location.href = '/quizzes/2';
    };
    chapterContent.appendChild(quizButton);
    quizButton.scrollIntoView({ behavior: 'smooth' });
}

function showNextChapter() {
    if (currentChapter < chapter2_theory.length) {
        const contentDiv = document.getElementById('content');
        const newDiv = document.createElement('div');
        newDiv.classList.add('chapter');
        newDiv.textContent = chapter2_theory[currentChapter];
        contentDiv.appendChild(newDiv);
        newDiv.scrollIntoView({ behavior: 'smooth' });
        currentChapter++;
        if (currentChapter == chapter2_theory.length)
        {
            showQuizButton();
        }
    } else {
        alert("No more chapters to display.");
    }
}



document.getElementById('nextChapterButton').addEventListener('click', showNextChapter);
document.addEventListener('DOMContentLoaded', showNextChapter);