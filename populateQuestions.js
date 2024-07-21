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
            chapter: 1,
            difficulty_level: 'Easy',
            text: 'Ποια περιοχή της Ισπανίας είναι γνωστή για το φλαμένκο;',
            options: ['Καταλονία', 'Ανδαλουσία', 'Μαρδίτη', 'Γαλικία'],
            correctAnswer: 'Ανδαλουσία'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Τι περιλαμβάνει το φεστιβάλ La Tomatina;',
            options: ['Τρέξιμο με ταύρους', 'Μάχη με ντομάτες', 'Πυροτεχνήματα', 'Θρησκευτικές πομπές'],
            correctAnswer: 'Μάχη με ντομάτες'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Ποιο από τα παρακάτω είναι ένα παραδοσιακό πιάτο με ρύζι και θαλασσινά;',
            options: ['Tapas', 'Tortilla de Patatas', 'Paella', 'Gazpacho'],
            correctAnswer: 'Paella'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Ποιο φεστιβάλ περιλαμβάνει την καύση πολύχρωμων γλυπτών στη Βαλένθια;',
            options: ['Semana Santa', 'Fallas de Valencia', 'San Fermín', 'La Tomatina'],
            correctAnswer: 'Fallas de Valencia'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Τι είναι τα churros;',
            options: ['Γλυκό', 'Κρύα σούπα', 'Τάπας', 'Αλλαντικό'],
            correctAnswer: 'Γλυκό'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Ποιο ποτό παρασκευάζεται από κόκκινο κρασί και φρούτα;',
            options: ['Horchata', 'Sangría', 'Gazpacho', 'Cava'],
            correctAnswer: 'Sangría'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Ποιο είναι το κύριο συστατικό της τορτίγιας;',
            options: ['Πατάτες', 'Κρέας', 'Ρύζι', 'Θαλασσινα'],
            correctAnswer: 'Πατάτες'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Ποιο παραδοσιακό πιάτο αποτελείται από λεπτοκομμένες φέτες αλλαντικού;',
            options: ['Paella', 'Jamón', 'Tortilla', 'Tapas'],
            correctAnswer: 'Jamón'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Ποιο φεστιβάλ περιλαμβάνει το τρέξιμο των ταύρων στην Παμπλόνα;',
            options: ['Semana Santa', 'Fallas de Valencia', 'San Fermín', 'La Tomatina'],
            correctAnswer: 'San Fermín'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Ποιο φαγητό είναι γνωστό για την κατανάλωση του μαζί με ζεστή σοκολάτα;',
            options: ['Gazpacho', 'Paella', 'Churros', 'Tortilla'],
            correctAnswer: 'Churros'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Τι τύπος πιάτων ειναι τα τάπας (Tapas);',
            options: ['Κυρίως πιάτο', 'Συνοδευτικό πιάτο', 'Επιδόρπιο', 'Πρωινό'],
            correctAnswer: 'Συνοδευτκό πιάτο'
        },
        {
            chapter: 2,
            difficulty_level: 'Easy',
            text: 'Ποιο ποτό παρασκευάζεται από νερο, ζάχαρη και chufas;',
            options: ['Sangría', 'Cava', 'Horchata', 'Vino Tinto'],
            correctAnswer: 'Horchata'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Ποια είναι τα τρία βασικά στοιχεία του φλαμένκο;',
            options: ['Cante, Baile, Toque', 'Cante, Música, Danza', 'Baile, Música, Fandango', 'Toque, Flamenco, Ritmo'],
            correctAnswer: 'Cante, Baile, Toque'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Σε ποιά πόλη της Ισπανίας λαμβάνει χώρα η La Tomatina;',
            options: ['Βαλένθια', 'Σεβίλλη', 'Μαδρίτη', 'Μπουνιόλ'],
            correctAnswer: 'Μπουνιόλ'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Απο ποιον αιώνα χρονολογείται το φεστιβάλ San Fermín;',
            options: ['12ο αιώνα', '14ο αιώνα', '16ο αιώνα', '18ο αιώνα'],
            correctAnswer: '14ο αιώνα'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Ποιο από τα συστατικά προσδίδει στη paella το χαρακτηριστικό της χρώμα;',
            options: ['Κουρκουμάς', 'Κάρυ', 'Σαφράν', 'Πάπρικα'],
            correctAnswer: 'Σαφράν'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Ποια περιοχή της Ισπανίας είναι γνωστή για το Jamón Ibérico;',
            options: ['Ανδαλουσία', 'Καταλονία', 'Εστρεμαδούρα', 'Γαλικία'],
            correctAnswer: 'Εστρεμαδούρα'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Ποιο είναι το αποκορύφωμα των εκδηλώσεων στο Fallas de Valencia;',
            options: ['La Nit de le Cremà', 'El Día de los Muertos', 'La Fiesta de San Juan', 'La Nochebuena'],
            correctAnswer: 'La Nit de le Cremà'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Τι συστατικό δεν περιέχεται στην παραδοσιακή συνταγή για gazpacho;',
            options: ['Ντομάτες', 'Αγγούρια', 'Πατάτες', 'Πιπεριές'],
            correctAnswer: 'Πατάτες'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Ποια πόλη της Ισπανίας είναι γνωστή για τις εντυπωσιακές πομπές της Semana Santa;',
            options: ['Βαλένθια', 'Βαρκελώνη', 'Μαδρίτη', 'Σεβίλλη'],
            correctAnswer: 'Σεβίλλη'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Ποιο από τα παρακάτω νησιά δεν ανακαλύφθηκε από τον Χριστόφορο Κολόμβο;',
            options: ['Jamón Serrano και Jamón Ibérico', 'Jamón Serrano και Jamón Bellota', 'Jamón Ibérico και Jamón Bellota', 'Jamón Bellota και Jamón Curado'],
            correctAnswer: 'Jamón Serrano και Jamón Ibérico'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Πως λέγεται το παραδοσιακό ψωμί που συνοδεύει την Horchata;',
            options: ['Churro', 'Pan de Muerto', 'Fartons', 'Magdalenas'],
            correctAnswer: 'Fartons'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Ποιο είναι το κύριο συστατικό της Horchata;',
            options: ['Ρύζι', 'Αμύγδαλα', 'Chufas', 'Σιτάρι'],
            correctAnswer: 'Chufas'
        },
        {
            chapter: 2,
            difficulty_level: 'Hard',
            text: 'Ποιο από τα παρακάτω δεν είναι στοιχείο του φλαμένκο;',
            options: ['Cante', 'Baile', 'Fandango', 'Toque'],
            correctAnswer: 'Fandango'
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
