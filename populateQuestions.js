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
        // chapter 1
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποια είναι η πρωτεύουσα της Ισπανίας;',
            options: ['Βαρκελώνη', 'Σεβιλλη', 'Μαδρίτη', 'Βαλένθια'],
            correctAnswer: 'Μαδρίτη'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Με ποια χώρα δεν συνορεύει η Ισπανία;',
            options: ['Πορτογαλία', 'Ιταλία', 'Γαλλία', 'Ανδόρρα'],
            correctAnswer: 'Ιταλία'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποια είναι η μεγαλύτερη οροσειρά της Ισπανίας;',
            options: ['Πυρηναία', 'Κανταβρικές Οροσειρές', 'Σιέρα Νεβάδα', 'Οροσειρά της Καστίλλης'],
            correctAnswer: 'Σιέρα Νεβάδα'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποια είναι η υψηλότερη κορυφή της Ιβηρικής Χερσονήσου',
            options: ['Ανέτο', 'Μουλάσεν', 'Τεϊντέ', 'Γιέρανι'],
            correctAnswer: 'Μουλάσεν'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποιος είναι ο μεγαλύτερος γοτθικός κθεδρικός ναός στον κόσμο;',
            options: ['Καθεδρικός της Σεβίλλης', 'Καθεδρικός της Βαρκελώνης', 'Καθεδρικός της Λεόν', 'Καθεδρικός της Σαλαμάνκα'],
            correctAnswer: 'Καθεδρικός της Σεβίλλης'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποιό μνημείο σχεδιάστηκε από τον Αντόνι Γκαουντί και είναι ακόμα ημιτελές;',
            options: ['Πάρκο Γκουέλ', 'Καθεδρικός της Σεβίλλης', 'Σαγράδα Φαμίλια ', 'Αλάμπρα'],
            correctAnswer: 'Σαγράδα Φαμίλια'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποιο από τα παρακάτω μνημεία βρίσκεται στη Γρανάδα;',
            options: ['Αλάμπρα', 'Μοναστήρι του Ελ Εσκοριάλ', 'Μεσκίτα της Κόρδοβας', 'Μουσείο Πράδο'],
            correctAnswer: 'Αλάμπρα'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποια είναι η κύρια θρησκεία στην Ισπανία;',
            options: ['Ισλάμ', 'Προτεσταντισμός', 'Ρωμαιοκαθολικισμός', 'Ορθοδοξία'],
            correctAnswer: 'Ρωμαιοκαθολικισμός'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποιο μνημείο αποτελεί το εθνικό μουσείο τέχνης της Ισπανίας;',
            options: ['Σαγράδα Φαμίλια', 'Μουσείο Πράδο', 'Καθεδρικός της Σεβίλλης', 'Αλάμπρα'],
            correctAnswer: 'Μουσείο Πράδο'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποιο μνημείο της Ισπανίας είναι γνωστό για τα πολύχρωμα μωσαϊκά του;',
            options: ['Μεσκίτα της Κόρδοβας', 'Πάρκο Γκουέλ', 'Μοναστήρι του Ελ Εσκοριάλ', 'Σαγράδα Φαμίλια'],
            correctAnswer: 'Πάρκο Γκουέλ'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Ποια ήταν η επίπτωση της μουσουλμανικής κατάκτησης στην Ιβηρική Χερσόνησο;',
            options: ['Εισαγωγή της βυζαντινής τέχνης', 'Αφομοίωση των Ρωμαίων από τους Κέλτες', 'Ένταξη της Ιβηρικής Χερσονήσου στον μουσουλμανικό κόσμο', 'Ίδρυση της Ισπανίας ως μοναρχία'],
            correctAnswer: 'Ένταξη της Ιβηρικής Χερσονήσου στον μουσουλμανικό κόσμο'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Ποιο μνημείο είναι γνωστό για τον συνδυασμό φυσικών στοιχείων και μοντέρνας αρχιτεκτονικής;',
            options: ['Αλάμπρα', 'Πάρκο Γκουέλ', 'Καθεδρικός της Σεβίλλης', 'Μεσκίτα της Κόρδοβας'],
            correctAnswer: 'Πάρκο Γκουέλ'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Ποιο μνημείο περιλαμβάνει το Παλάτι των Νασρίντ και τον Γενεραλίφε;',
            options: ['Μεσκίτα της Κόρδοβας', 'Αλάμπρα', 'Μοναστήρι του Ελ Εσκοριάλ', 'Πάρκο Γκουέλ'],
            correctAnswer: 'Αλάμπρα'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Πότε ξεκίνησε η κατασκευή της Σαγράδα Φαμίλια;',
            options: ['1702', '1882', '1922', '1982'],
            correctAnswer: '1882'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Ποιο μνημείο της Ισπανίας ήταν αρχικά μιναρές ενός τζαμιού;',
            options: ['Σαγράδα Φαμίλια', 'Πάρκο Γκουέλ', 'Καθεδρικός της Σεβίλλης (Γιράλντα)', 'Μουσείο Πράδο'],
            correctAnswer: 'Καθεδρικός της Σεβίλλης (Γιράλντα)'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Ποιο μνημείο της Ισπανίας χτίστηκε από τον Φίλιππο Β\' τον 16ο αιώνα;',
            options: ['Μεσκίτα της Κόρδοβας', 'Μοναστήρι του Ελ Εσκοριάλ', 'Αλάμπρα', 'Καθεδρικός της Σεβίλλης'],
            correctAnswer: 'Μοναστήρι του Ελ Εσκοριάλ'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Ποιο μνημείο αποτελεί ένα από τα καλύτερα παραδείγματα της ισλαμικής αρχιτεκτονικής στην Ισπανία;',
            options: ['Αλάμπρα', 'Πάρκο Γκουελ', 'Σαγράδα Φαμίλια', 'Μουσείο Πράδο'],
            correctAnswer: 'Αλάμπρα'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Ποιο μνημείο της Ισπανίας είναι γνωστό για τις κολόνες και τα τόξα του, καθώς και για τον μιχράμπ;',
            options: ['Μεσκίτα της Κόρδοβας', 'Καθεδρικός της Σεβίλλης', 'Μοναστήρι του Ελ Εσκοριάλ', 'Πάρκο Γκουέλ'],
            correctAnswer: 'Μεσκίτα της Κόρδοβας'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Από πότε η Ισπανία δεν έχει επίσημη θρησκεία σύμφωνα με το Σύνταγμά της;',
            options: ['1789', '1868', '1931', '1978'],
            correctAnswer: '1978'
        },
        {
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποιο ήταν το κύριο κίνητρο του Χριστόφορου Κολόμβου για το ταξίδι του το 1492;',
            options: ['Να ανακαλύψει νέες εμπορικές διαδρομές προς την Ασία', 'Να βρει νέα εδάφη για αποίκιση', 'Να αναζητήσει χρυσό και πολύτιμα πετράδια', 'Να εξερευνήσει την Αφρική'],
            correctAnswer: 'Να ανακαλύψει νέες εμπορικές διαδρομές προς την Ασία'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Ποιες περιοχές του Νέου Κόσμου εξερεύνησε ο Χριστόφορος Κολόμβος κατά το πρώτο του ταξίδι;',
            options: ['Ο Ηπειρωτικός Καναδάς και οι Μεξικανικές Παράκτιες περιοχές', 'Οι Μπαχάμες, η Κούβα και η Τζαμάικα', 'Οι Ηνωμένες Πολιτείες και ο Καναδάς', 'Η Βραζιλία και η Αργεντινή'],
            correctAnswer: 'Οι Μπαχάμες, η Κούβα και η Τζαμάικα'
        },
        {
            chapter: 1,
            difficulty_level: 'Hard',
            text: 'Ποιο από τα παρακάτω νησιά δεν ανακαλύφθηκε από τον Χριστόφορο Κολόμβο;',
            options: ['Αγία Λουκία', 'Κούβα', 'Εξωτικές Αντίλλες', 'Μπαχάμες'],
            correctAnswer: 'Αγία Λουκία'
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
