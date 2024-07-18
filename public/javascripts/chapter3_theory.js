const chapter3_theory = [
    "Spanish grammar revolves around gendered nouns (masculine and feminine), verb conjugations (present, past, future), and sentence structure (subject-verb-object). Learning basic grammar rules is essential for constructing meaningful sentences in Spanish.",
    "Nouns in Spanish are categorized by gender (masculine or feminine) and number (singular or plural). Articles (definite and indefinite) precede nouns to indicate specificity and quantity. Understanding noun and article agreement is crucial for grammatical accuracy.",
    "Verbs in Spanish are conjugated based on tense (present, past, future), mood (indicative, subjunctive), and person (first, second, third). Regular verbs follow predictable patterns, while irregular verbs have unique conjugations that must be memorized.",
    "Pronouns (subject, object, reflexive) replace nouns to avoid repetition and clarify sentence structure. Prepositions establish relationships between words and phrases (location, direction, time). Mastering pronouns and prepositions enhances communication in Spanish.",
    "Building vocabulary is fundamental for understanding and speaking Spanish fluently. Learn common phrases for everyday communication, including greetings, expressions of courtesy, and essential vocabulary related to family, food, travel, and leisure activities.",
];



let currentChapter = 0;

function showQuizButton() {
    const chapterContent = document.getElementById('buttons');
    const quizButton = document.createElement('button');
    quizButton.className = 'buttonSeeMore';
    quizButton.textContent = 'Take Quiz for this Chapter';
    quizButton.onclick = function() {
        window.location.href = '/quizzes/3';
    };
    chapterContent.appendChild(quizButton);
    quizButton.scrollIntoView({ behavior: 'smooth' });
}

function showNextChapter() {
    if (currentChapter < chapter3_theory.length) {
        const contentDiv = document.getElementById('content');
        const newDiv = document.createElement('div');
        newDiv.classList.add('chapter');
        newDiv.textContent = chapter3_theory[currentChapter];
        contentDiv.appendChild(newDiv);
        newDiv.scrollIntoView({ behavior: 'smooth' });
        currentChapter++;
        if (currentChapter == chapter3_theory.length)
        {
            showQuizButton();
        }
    } else {
        alert("No more chapters to display.");
    }
}



document.getElementById('nextChapterButton').addEventListener('click', showNextChapter);
document.addEventListener('DOMContentLoaded', showNextChapter);

