const chapter1_theory = [
    `Η Ισπανία (ισπανικά: España), επίσημα το Βασίλειο της Ισπανίας (ισπανικά: Reino de España),
    είναι κράτος της νότιας Ευρώπης που καταλαμβάνει το μεγαλύτερο μέρος της Ιβηρικής χερσονήσου. 
    Συνορεύει με την Γαλλία, την Ανδόρρα, το Γιβραλτάρ και την Πορτογαλία, 
    ανατολικά και νότια βρέχεται από τη Μεσόγειο Θάλασσα και νοτιοδυτικά βρέχεται από τον Ατλαντικό ωκεανό. `,

    `Έχει έκταση 504.645 τ.χλμ. και συνολικό πληθυσμό 48.592.909 κατοίκους,
    σύμφωνα με επίσημη εκτίμηση για τον Ιανουάριο του 2024.
    Πρωτεύουσα και μεγαλύτερη πόλη της Ισπανίας, είναι η Μαδρίτη.`,

    `Η Ισπανία μοιράζεται μεγάλο μέρος της ιστορίας της με την Πορτογαλία, την Ανδόρρα και τη νότια Γαλλία. 
    Κατά την αρχαιότητα στην περιοχή έζησαν διάφοροι λαοί, όπως οι Ίβηρες και οι Κέλτες, 
    οι οποίοι αφομοιώθηκαν από τους Ρωμαίους μετά τη ρωμαϊκή κατάκτηση. 
    Ωστόσο, η μουσουλμανική κατάκτηση της Ιβηρικής άλλαξε ριζικά τον χαρακτήρα των Ισπανογότθων, 
    εντάσσοντας την Ιβηρική χερσόνησο στον μουσουλμανικό κόσμο.`,

    `Η Ισπανία γενικά αποτελεί ένα τεράστιο σε έκταση οροπέδιο που διαμοιράζεται από αλλεπάλληλες οροσειρές
    σε επιμέρους μικρότερα οροπέδια. Η μεγαλύτερη οροσειρά της Ισπανίας είναι η Σιέρα Νεβάδα (Sierra Nevada),
    που βρίσκεται στην περιοχή της Ανδαλουσίας, στη νότια Ισπανία. Η υψηλότερη κορυφή της,
    και ταυτόχρονα η υψηλότερη κορυφή της Ιβηρικής Χερσονήσου, είναι η Μουλάσεν (Mulhacén),
    η οποία φτάνει σε ύψος τα 3.479 μέτρα.`,

    `Οι Ισπανοί είναι κατά το μεγαλύτερο μέρος τους χριστιανοί Ρωμαιοκαθολικοί,
    αν και η δύναμη της Εκκλησίας έχει μειωθεί αρκετά τα τελευταία χρόνια.
    Σήμερα το Ισπανικό Σύνταγμα (άρθρο 16) παρέχει και προστατεύει πλήρως την ανεξιθρησκία, που είχε ξεκινήσει από το 1868.
    Έτσι από τις 29 Δεκεμβρίου 1978 δεν υφίσταται ο όρος «επίσημη θρησκεία» στην Ισπανία.`,

    `Η Ισπανία διαθέτει πληθώρα μνημείων και ιστορικών τοποθεσιών που αντανακλούν την πλούσια ιστορία και τον πολιτισμό της.
    Ας δούμε κάποια βασικά μνημεία μαζί.`,

    `1. Η Αλάμπρα <b>(La Alhambra)</b> <br><br>
    
    Η Αλάμπρα είναι ένα επιβλητικό συγκρότημα παλατιών και φρουρίων στη Γρανάδα.
    Χτίστηκε κατά την εποχή των Μαυριτανών και αποτελεί ένα από τα καλύτερα παραδείγματα της ισλαμικής αρχιτεκτονικής στην Ισπανία.
    Το συγκρότημα περιλαμβάνει το Παλάτι των Νασρίντ, τον Παράδεισο του Λίντερ, και τον Γενεραλίφε, έναν όμορφο κήπο.`,

    `2. Η Σαγράδα Φαμίλια <b>(La Sagrada Família)</b> <br><br>
    Η Σαγράδα Φαμίλια είναι μια μεγάλη, ημιτελής ρωμαιοκαθολική βασιλική στη Βαρκελώνη, σχεδιασμένη από τον διάσημο αρχιτέκτονα Αντόνι Γκαουντί.
    Η κατασκευή της ξεκίνησε το 1882 και αναμένεται να ολοκληρωθεί γύρω στο 2026.
    Είναι γνωστή για τον μοναδικό της σχεδιασμό και τις εντυπωσιακές της λεπτομέρειες.`,

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
        newDiv.innerHTML = chapter1_theory[currentChapter];
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


