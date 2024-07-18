const chapter1_theory = [
    "Spain's history dates back to ancient times, with evidence of human habitation as early as the Paleolithic era. The Iberian Peninsula was home to various tribes and cultures, including the Iberians, Celts, and Basques. The Phoenicians and Greeks established trading colonies along the coast, while the Carthaginians controlled much of the peninsula before the arrival of the Romans.",
    
    "The Romans began their conquest of the Iberian Peninsula in 218 BC during the Second Punic War. They established the provinces of Hispania Tarraconensis, Hispania Baetica, and Lusitania. Roman rule brought significant cultural, economic, and infrastructural development to Spain, including roads, aqueducts, and cities. Christianity also spread during this period, becoming the dominant religion by the 4th century AD.",
    
    "Following the decline of the Roman Empire, the Visigoths, a Germanic tribe, invaded Spain and established a kingdom in the 5th century AD. The Visigothic Kingdom lasted until the early 8th century, marked by the unification of various territories and the codification of laws. The Visigothic period saw the continuation of Roman traditions and the spread of Christianity.",
    
    "In 711 AD, the Moors, a Muslim group from North Africa, invaded the Iberian Peninsula and established the Umayyad Caliphate. Islamic Spain, known as Al-Andalus, flourished as a center of learning, culture, and trade. Major cities like Córdoba, Seville, and Granada became renowned for their advancements in science, medicine, architecture, and the arts. The coexistence of Muslims, Christians, and Jews during this period led to significant cultural exchange.",
    
    "The Reconquista was a series of campaigns by Christian kingdoms to reclaim territory from the Moors. It began in the 8th century and culminated in 1492 with the fall of Granada, the last Muslim stronghold, to the Catholic Monarchs Ferdinand and Isabella. The Reconquista had a profound impact on Spanish society, politics, and culture, leading to the consolidation of Christian rule and the expulsion or conversion of Muslims and Jews.",
    
    "Following the Reconquista, Spain entered its Golden Age, marked by the establishment of a vast colonial empire. The discovery of the Americas in 1492 by Christopher Columbus, sponsored by the Spanish crown, led to extensive exploration, conquest, and colonization. Spain became one of the world's leading powers, controlling territories in Europe, the Americas, Asia, and Africa. The wealth from its colonies fueled Spain's cultural and artistic achievements during this period.",
    
    "The Habsburg dynasty ruled Spain from the early 16th century to the early 18th century. Under Habsburg rule, Spain experienced both triumphs and challenges. The reign of Charles I (also Holy Roman Emperor Charles V) and Philip II saw Spain at the height of its power, but also faced military conflicts, economic difficulties, and religious tensions. The decline of the Habsburgs led to the War of Spanish Succession and the rise of the Bourbon dynasty.",
    
    "The Bourbon dynasty, which began with Philip V in the early 18th century, implemented a series of reforms to modernize Spain and strengthen royal authority. The Bourbon Reforms aimed to centralize administration, promote economic development, and improve military efficiency. Despite these efforts, Spain faced internal and external challenges, including the Napoleonic Wars and the loss of its American colonies in the early 19th century.",
    
    "The 19th century was a period of significant political and social upheaval in Spain. The Peninsular War against Napoleonic France, the struggle for independence in Spanish America, and internal conflicts such as the Carlist Wars shaped the nation's history. The century also saw attempts at liberal reforms, the establishment of a constitutional monarchy, and the rise of industrialization.",
    
    "The 20th century brought further changes and challenges to Spain. The Spanish Civil War (1936-1939) resulted in the establishment of Francisco Franco's dictatorship, which lasted until his death in 1975. The post-war period was marked by repression and economic hardship, but also gradual modernization. Following Franco's death, Spain transitioned to democracy, culminating in the adoption of a new constitution in 1978 and the establishment of a parliamentary monarchy.",
    
    "Since the late 20th century, Spain has undergone significant political, economic, and social transformation. It became a member of the European Union in 1986, leading to increased integration with Europe. Spain has experienced economic growth, modernization, and cultural renaissance, while also facing challenges such as regional independence movements, economic crises, and immigration. Today, Spain is a vibrant and diverse country with a rich cultural heritage."
];

let currentChapter = 0;

function showQuizButton() {
    const chapterContent = document.getElementById('buttons');
    const quizButton = document.createElement('button');
    quizButton.className = 'buttonSeeMore';
    quizButton.textContent = 'Take Quiz for this Chapter';
    quizButton.onclick = function() {
        window.location.href = '/quizzes/1'; // Adjust the URL to your quiz route
    };
    chapterContent.appendChild(quizButton);
    quizButton.scrollIntoView({ behavior: 'smooth' });
}

function showNextChapter() {
    if (currentChapter < chapter1_theory.length) {
        const contentDiv = document.getElementById('content');
        const newDiv = document.createElement('div');
        newDiv.classList.add('chapter');
        newDiv.textContent = chapter1_theory[currentChapter];
        contentDiv.appendChild(newDiv);
        newDiv.scrollIntoView({ behavior: 'smooth' });
        currentChapter++;
        if (currentChapter == chapter1_theory.length)
        {
            showQuizButton();
        }
    } else {
        alert("No more chapters to display.");
    }
}



document.getElementById('nextChapterButton').addEventListener('click', showNextChapter);
document.addEventListener('DOMContentLoaded', showNextChapter);


