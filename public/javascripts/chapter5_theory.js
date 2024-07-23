const chapter5_theory = [

    `
    <p class="left-dialogue">¡Hola, Juan! ¿Cómo estás?</p>
    <p class="right-dialogue">Hola, María. Estoy bien, gracias. ¿Y tú?</p>
    `,


];

let currentChapter = 0;

function showQuizButton() {
    const chapterContent = document.getElementById('buttons');
    const quizButton = document.createElement('button');
    quizButton.className = 'buttonSeeMore';
    quizButton.textContent = 'Πάμε για εξάσκηση!';
    quizButton.onclick = function() {
        window.location.href = '/quizzes/4';
    };
    chapterContent.appendChild(quizButton);
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
            document.getElementById('nextChapterButton').remove()
            showQuizButton();
        }
    } else {
        alert("No more chapters to display.");
    }
}



document.getElementById('nextChapterButton').addEventListener('click', showNextChapter);
document.addEventListener('DOMContentLoaded', showNextChapter);