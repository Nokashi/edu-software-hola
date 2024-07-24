const mongoose = require('mongoose');
const Question = require('./models/question'); // Adjust the path as per your project structure
require('dotenv').config();

async function connectDB() {
    // await mongoose.connect('mongodb://localhost:27017/edu-software-hola')
    const connectionString = process.env.MONGO_URI
    mongoose.connect(connectionString)
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
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Ποιο είναι το ισπανικό αντίστοιχο της λέξης «Καλημέρα»;',
            options: ['¡Buenas noches!', '¡Hola!', '¡Buenos días!', '¡Gracias!'],
            correctAnswer: '¡Buenos días!'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Πως λέγεται το αντίο στα ισπανικά;',
            options: ['¡Hola!', '¡Adiós!', '¡Gracias!', '¡Buenos días!'],
            correctAnswer: '¡Adiós!'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Ποιο είναι το ερώτημα «Πως σε λένε; » στα ισπανικά;',
            options: ['¿Quién eres tú?', '¿Cómo estás?', '¿Cómo te llamas?', '¿Qué hora es?'],
            correctAnswer: '¿Cómo te llamas?'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Πως λέγεται το Σαββατοκύριακο στα ισπανικά;',
            options: ['El fin de semana', 'En dos meses', 'La semana pasada', 'El proximo mes'],
            correctAnswer: 'El fin de semana'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Ποιο από τα ρήματα εκφράζει κάτι παροδικό σε χρόνο;',
            options: ['Tener', 'Estar', 'Hacer', 'Ser'],
            correctAnswer: 'Estar'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Ποιο από τα παρακάτω ρήματα δεν είναι ομαλό;',
            options: ['Comer', 'Vivir', 'Hablar', 'Ir'],
            correctAnswer: 'Vivir'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Ποιο είναι η μετάφραση του “Yo soy” στα ελληνικά;',
            options: ['Εγώ πηγαίνω', 'Εγώ έχω', 'Εγώ είμαι', 'Εγώ κάνω'],
            correctAnswer: 'Εγώ είμαι'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Ποιο είναι η μετάφραση του “Nosotros hablamos” στα ελληνικά;',
            options: ['Εμείς τρώμε', 'Εμείς μιλάμε', 'Εμείς ζούμε', 'Εμείς πηγαίνουμε'],
            correctAnswer: 'Εμείς μιλάμε'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Ποιο λέγεται το ρήμα «έρχομαι» στα ισπανικά',
            options: ['Hacer', 'Tener', 'Venir', 'Decir'],
            correctAnswer: 'Venir'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Ποια είναι η σωστή κλίση του ρήματος “tener” για το πρώτο ενικό',
            options: ['Tengo', 'Tienes', 'Tiene', 'Tenéis'],
            correctAnswer: 'Tengo'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Ποιο ρήμα σημαίνει “πηγαίνω” στα ισπανικά;',
            options: ['Decir', 'Venir', 'Saber', 'Ir'],
            correctAnswer: 'Ir'
        },
        {
            chapter: 3,
            difficulty_level: 'Easy',
            text: 'Πως λέγεται η Παρασκευή στα ισπανικά;',
            options: ['Viernes', 'Miercoles', 'Martes', 'Domingo'],
            correctAnswer: 'Viernes'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Ποια είναι η σωστή κλίση του ρήματος “vivir” στο δεύτερο πληθυντικό;',
            options: ['Viven', 'Vivimos', 'Vivís', 'Vive'],
            correctAnswer: 'Vivís'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Πως θα πούμε «15 Ιουνίου» στα ισπανικά',
            options: ['El quince de Junio', 'El trece de Junio', 'El quince de Julio', 'El cinco de Julio'],
            correctAnswer: 'El quince de Junio'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Ποια είναι η σωστή κλίση του ρήματος “decir” για το εσείς;',
            options: ['Decís', 'Decimos', 'Digo', 'Dice'],
            correctAnswer: 'Decís'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Πως λέμε «το Σάββατο στις 5 το απόγευμα» στα ισπανικά;',
            options: ['El sabado a las cinco de la tarde ', 'El sabado a las ocho de la mañana', 'El Domino a las cinco de la noche', 'El domingo a la una de la tarde'],
            correctAnswer: 'El sábado a las cinco de la tarde'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Πως λέμε «τον επόμενο Μάιο» στα ισπανικά;',
            options: ['El próximo mayo', 'el mayo pasado', 'el abril pasado', 'el próximo mes'],
            correctAnswer: 'el proximo mayos'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Με ποια φράση θα πούμε «Είμαι στην Μαδρίτη για διακοπες»;',
            options: ['Soy en Madrid de vacaciones', 'Voy en Madrid de vacaciones', 'Estoy en Madrid de vacaciones', 'Quiero ir en Madrid de vacaciones'],
            correctAnswer: 'Estoy en Madrid de vacaciones'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Με ποια φράση θα πούμε «μεθαύριο το μεσημερι στις 2»;',
            options: ['Anteayer a las dos de la tarde', 'Mañana a las dos de la noche', 'Pasado mañana a las dos de la tarde', 'Hoy a las dos de la tarde'],
            correctAnswer: 'Pasado mañana a las dos de la tarde'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Ποια είναι η σωστή κλίση του ρήματος “querer” για το εσείς;',
            options: ['Queremos', 'Quieres', 'Queréis', 'Quiero'],
            correctAnswer: 'Queréis'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Ποια είναι η σωστή κλίση του ρήματος “ir” για το τρίτο πληθυντικό;',
            options: ['Vamos', 'Va', 'Vais', 'Van'],
            correctAnswer: 'Van'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Ποια είναι η σωστή μετάφραση της φράσης ¨Son las dos;',
            options: ['Η ώρα είναι μία', 'Η ώρα είναι έντεκα', 'Η ώρα είναι δύο', 'Η ώρα είναι δώδεκα'],
            correctAnswer: 'Η ώρα είναι δύο'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Ποιο είναι το αντίστοιχο «προχθές» στα ισπανικά;',
            options: ['Mañana', 'Hoy', 'Anteayer', 'Ayer'],
            correctAnswer: 'Anteayer'
        },
        {
            chapter: 3,
            difficulty_level: 'Hard',
            text: 'Ποια ρήμα σημαίνει «λεω» στα ισπανικά;',
            options: ['Saber', 'Querer', 'Decir', 'Hablar'],
            correctAnswer: 'Decir'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Ποιο είναι το ισπανικό αντίστοιχο της λέξης «Που»;',
            options: ['Cuál', 'Que', 'Dónde', 'Cuánto'],
            correctAnswer: 'Dónde'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Ποιο λέγεται το ψωμί στα ισπανικά;',
            options: ['Pan', 'Queso', 'Té', 'gamba'],
            correctAnswer: 'Pan'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Τι σημαίνει «carne» στα ελληνικά;',
            options: ['Ψάρι', 'Κρέας', 'Γαρίδα', 'Σκόρδο'],
            correctAnswer: 'Κρέας'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Ποιο είναι το ισπανικό αντίστοιχο της λέξης «Πόσο»;',
            options: ['Cuál', 'Que', 'Dónde', 'Cuánto'],
            correctAnswer: 'Cuánto'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Τι σημαίνει «carne» στα ελληνικά;',
            options: ['Ψάρι', 'Κρέας', 'Γαρίδα', 'Σκόρδο'],
            correctAnswer: 'Κρέας'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Ποιο είναι το ισπανικό αντίστοιχο της λέξης παλτό;',
            options: ['Abrigo', 'Bufanda', 'Camisa', 'Camiseta'],
            correctAnswer: 'Abrigo'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Ποια φράση μεταφράζεται ως «Τι ώρα αναχωρεί το τραίνο»;',
            options: ['¿A qué hora llega el autobús?', '¿Dónde está el autobús?', '¿A qué hora sale el autobús?', '¿Cuándo cuesta el autobús?'],
            correctAnswer: '¿A qué hora sale el autobús?'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Συμπλήρωσε την φράση «¿___ puedo ir al museo?»',
            options: ['Cuál', 'Cómo', 'Dónde', 'Cuándo'],
            correctAnswer: 'Cómo'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Ποια φράση θα χρησιμοποιήσουμε για να παραγγείλουμε μια σαλάτα με κοτόπουλο;',
            options: ['Quisiera una ensalada con carne', 'Quisiera unas tapas con mariscos', 'Querría una paella con pollo', 'Quisiera una ensalada con pollo'],
            correctAnswer: 'Quisiera una ensalada con pollo'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Ποιο είναι το ισπανικό αντίστοιχο της λέξης «Πότε»;',
            options: ['Cuál', 'Que', 'Dónde', 'Cuándo'],
            correctAnswer: 'Cuándo'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Πως λέγεται το γάλα στα ισπανικά;',
            options: ['leche', 'té', 'vino blanco', 'agua'],
            correctAnswer: 'leche'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Πως μπορούμε να ζητήσουμε «ένα νούμερο μεγαλύτερο» στα ισπανικά;',
            options: ['Un número más grande', 'Una talla más grande', 'Un número más pequeño', 'Una talla más pequeña'],
            correctAnswer: 'Una talla más grande'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Πως λέμε «χρειάζεται να πάρεις το τραμ» στα ισπανικά;',
            options: ['Necesito coger el tren', 'Necesita tomar el tren', 'Necesito coger el autobús', 'Necesita coger el tranvía'],
            correctAnswer: 'Necesita coger el tranvía'
        },
        {
            chapter: 4,
            difficulty_level: 'Easy',
            text: 'Τι σημαίνει «gazpacho» στα ισπανικά;',
            options: ['Ορεκτικό', 'κυρίως πιάτο', 'Κρύα σούπα', 'Ζεστή σούπα'],
            correctAnswer: 'Κρύα σούπα'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Ντόπιος:</b> Claro, está enfrente de la panadería. </p> <br>
            <p><b>2. Τουρίστας:</b> ¡Hola! ¿Dónde está el supermercado más cercano (πιο κοντινό)? </p> <br>
            <p><b>3. Τουρίστας:</b> Y ¿hay una farmacia también ahí? </p> <br>
            <p><b>4. Ντόπιος:</b> De nada. </p> <br>
            <p><b>5. Ντόπιος:</b> Sigue recto por cuatro cuadras y está a la izquierda. </p> <br>
            <p><b>6. Τουρίστας:</b> Claro, está enfrente de la panadería. </p>  <br>
            `,
            options: ['2 - 5 - 3 - 1 - 6 - 4', '1 - 3 - 5 - 2 - 6 - 4', '6 - 5 - 4 - 2 - 1 - 3', '1 - 2 - 3 - 4 - 6 - 5'],
            correctAnswer: '2 - 5 - 3 - 1 - 6 - 4'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Ντόπιος:</b> Necesita tomar el autobús número 5 por tres paradas y después caminar (περπατάω) dos cuadras. </p> <br>
            <p><b>2. Ντόπιος:</b> De nada. </p> <br>
            <p><b>3. Τουρίστας:</b> Perdón, ¿cómo puedo ir a la estación del tranvía? </p> <br>
            <p><b>4. Τουρίστας:</b> Vale, entiendo (καταλαβαίνω). Gracias por su ayuda. </p> <br>
            `,
            options: ['1 - 3 - 2 - 4', '3 - 1 - 2 - 4', '3 - 1 - 4 - 2', '1 - 4 - 3 - 2'],
            correctAnswer: '3 - 1 - 4 - 2'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Τουρίστας:</b> Vale, pero la hora correcta fue (ήταν) a las 11 de la noche, ¿no? </p> <br>
            <p><b>2. Τουρίστας:</b> Perdón, ¿a qué hora llega el autobús de Madrid? </p> <br>
            <p><b>3. Τουρίστας:</b> Vale, entiendo. Gracias por su ayuda (βοήθεια). </p> <br>
            <p><b>4. Υπάλληλος:</b> Pues, ese autobús llega más tarde (με καθυστέρηση), a las 2 de la noche.  </p> <br>
            <p><b>5. Υπάλληλος:</b> Buenas tardes. </p> <br>
            <p><b>6. Υπάλληλος:</b> Si, es verdad. Pero hay mucho tráfico a causa de (εξαιτίας) un accidente. </p>  <br>
            `,
            options: ['1 - 3 - 5 - 2 - 4 - 6', '2 - 4 - 1 - 6 - 3 - 5', '2 - 6 - 4 - 3 - 1 - 5', '2 - 3 - 6 - 1 - 5 - 3'],
            correctAnswer: '2 - 4 - 1 - 6 - 3 - 5'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Υπάλληλος:</b> Perfecto, está reservado (έγινε κράτηση). </p> <br>
            <p><b>2. Πελάτης:</b> ¡Buenas tardes! Necesito una mesa para esta noche. </p> <br>
            <p><b>3. Πελάτης:</b> A las 8 de la noche. </p> <br>
            <p><b>4. Υπάλληλος:</b> ¿Para cuántas personas?  </p> <br>
            <p><b>5. Πελάτης:</b> Muchas gracias. </p> <br>
            <p><b>6. Πελάτης: </b> Para cuatro personas, por favor. </p>  <br>
            <p><b>7. Υπάλληλος:</b> De nada, ¡hasta luego!(τα λέμε αργότερα) </p>  <br>
            <p><b>8. Υπάλληλος:</b> Muy bien, ¿a qué hora? </p>  <br>
            `,
            options: ['1 - 3 - 6 - 8 - 2 - 4 - 5 - 7', '1 - 2 - 3 - 6 - 5 - 4 - 7 - 8', '7 - 8 - 6 - 5 - 2 - 1 - 3 - 4', '2 - 4 - 6 - 8 - 3 - 1 - 5 - 7'],
            correctAnswer: '2 - 4 - 6 - 8 - 3 - 1 - 5 - 7'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Περαστικός:</b> La estación está a unos 500 metros , justo al lado del banco (ακριβώς δίπλα στην τράπεζα). </p> <br>
            <p><b>2. Περαστικός:</b> ¡Siga recto por esta calle y gire (στρίψε) a la derecha en el segundo semáforo. </p> <br>
            <p><b>3. Tουρίστας:</b> Disculpe, ¿cómo puedo llegar a la estación de tren?</p> <br>
            <p><b>4. Περαστικός:</b> De nada, que tenga un buen día (να έχετε μια ωραία ημέρα). </p> <br>
            <p><b>5. Tουρίστας:</b> ¿Y después? </p> <br>
            <p><b>6. Tουρίστας: </b> ¡Muchas gracias!</p> <br>
            `,
            options: ['3 - 2 - 5 - 1 - 6 - 4', '1 - 2 - 3 - 6 - 5 - 4', '3 - 2 - 1 - 5 - 4 - 6', '2 - 5 - 1 - 6 - 3 - 4'],
            correctAnswer: '3 - 2 - 5 - 1 - 6 - 4'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Περαστικός:</b> No, está bastante cerca. El museo está al lado del parque. </p> <br>
            <p><b>2. Tουρίστας:</b> Perdón, ¿dónde está el museo de arte? </p> <br>
            <p><b>3. Tουρίστας:</b> ¿Está lejos?</p> <br>
            <p><b>4. Tουρίστας:</b> Perfecto, gracias. </p> <br>
            <p><b>5. Περαστικός:</b>  Camine (περπάτησε) dos cuadras hacia el norte y luego gire a la izquierda.  </p> <br>
            <p><b>6. Περαστικός: </b> De nada, que disfrute su visita (να απολαύσετε την επίσκεψη σας).</p> <br>
            `,
            options: ['1 - 2 - 3 - 5 - 6 - 4', '2 - 5 - 3 - 1 - 4 - 6', '2 - 3 - 5 - 1 - 6 - 4', '2 - 6 - 4 - 1 - 3 - 5'],
            correctAnswer: '2 - 5 - 3 - 1 - 4 - 6'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Πελάτης:</b> Sí, me gustaría pedir (ζητάω) la paella de mariscos. </p> <br>
            <p><b>2. Πελάτης:</b> Buenos días, ¿me puede traer (φέρνω) el menú, por favor?  </p> <br>
            <p><b>3. Πελάτης:</b> No, eso es todo por ahora (αυτά για τώρα). Gracias.</p> <br>
            <p><b>4. Πελάτης:</b> Una cerveza, por favor.</p> <br>
            <p><b>5. Σεφ:</b>  Claro, aquí tiene. ¿Qué le gustaría beber?  </p> <br>
            <p><b>6. Σεφ:</b>¿Le gustaría algo de comer?</p> <br>
            <p><b>7. Σεφ:</b> Perfecto, ¿algo más?</p> <br>
            `,
            options: ['1 - 3 - 5 - 2 - 4 - 6 - 7', '2 - 4 - 5 - 6 - 7 - 1 - 3', '2 - 5 - 4 - 6 - 1 - 7 - 3', '5 - 4 - 6 - 1 - 7 - 3 - 2'],
            correctAnswer: '2 - 5 - 4 - 6 - 1 - 7 - 3'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Πελάτης:</b> Para dos, por favor. </p> <br>
            <p><b>2. Πελάτης:</b> Me gustaría pedir una paella, por favor.  </p> <br>
            <p><b>3. Πελάτης:</b> Sí, una botella de vino blanco.</p> <br>
            <p><b>4. Σεφ::</b> ¿Para cuántas personas?</p> <br>
            <p><b>5. Σεφ:</b>  Perfecto, ¿algo más?  </p> <br>
            <p><b>6. Σεφ:</b>¿Le gustaría alguna bebida con la comida? </p> <br>
            <p><b>7. Πελάτης:</b> No, eso es todo (αυτά είναι όλα). Gracias.</p> <br>
            `,
            options: ['1 - 2 - 3 - 7 - 6 - 4 - 5', '2 - 4 - 1 - 6 - 3 - 5 - 7', '4 - 1 - 6 - 3 - 5 - 7 - 2', '1 - 4 - 2 - 5 - 3 - 6 - 7'],
            correctAnswer: '2 - 4 - 1 - 6 - 3 - 5 - 7'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Πελάτης:</b> Me gustaría probar (δοκιάζω) las patatas bravas y las gambas al ajillo. </p> <br>
            <p><b>2. Πελάτης:</b> ¿Tienen tapas?  </p> <br>
            <p><b>3. Πελάτης:</b> Sí, por favor. </p> <br>
            <p><b>4. Σεφ::</b> Excelente elección (επιλογή). ¿Algo más? (κάτι άλλο) </p> <br>
            <p><b>5. Σεφ:</b>  Aquí tiene. ¿Qué le gustaría probar?  </p> <br>
            <p><b>6. Πελάτης:</b>No, eso es todo por ahora. Gracias.</p> <br>
            <p><b>7. Σεφ:</b>Sí, tenemos una variedad (ποικιλία) de tapas. ¿Le gustaría ver (βλέπω) la carta (μενού) de tapas?</p> <br>
            `,
            options: ['2 - 7 - 3 - 5 - 1 - 4 - 6', '7 - 2 - 5 - 3 - 6 - 1 - 4', '1 - 2 - 3 - 5 - 6 - 4 - 7', '2 - 1 - 5 - 4 - 6 - 3 - 7'],
            correctAnswer: '2 - 7 - 3 - 5 - 1 - 4 - 6'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Πωλητής:</b> Cuesta 20 euros. </p> <br>
            <p><b>2. Πωλητής:</b> Claro, los probadores están al fondo (στο βάθος) a la derecha.  </p> <br>
            <p><b>3. Πελάτης:</b> ¿Cuánto cuesta esta camiseta? </p> <br>
            <p><b>4. Πελάτης:</b> Perfecto, ¿puedo probarme una talla mediana? </p> <br>
            <p><b>5. Πελάτης:</b> ¿Tienen otras tallas?  </p> <br>
            <p><b>6. Πωλητής:</b>Sí, tenemos tallas pequeñas, medianas (μεσαία) y grandes. </p> <br>
            <p><b>7. Πελάτης:</b>Gracias.</p> <br>
            `,
            options: ['1 - 3 - 7 - 5 - 6 - 4 - 2', '5 - 1 - 6 - 2 - 3 - 7 - 4', '3 - 1 - 5 - 6 - 4 - 2 - 7', '7 - 6 - 5 - 4 - 1 - 3 - 2'],
            correctAnswer: '3 - 1 - 5 - 6 - 4 - 2 - 7'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Πελάτης:</b> Perfecto, me gustaría probar la roja en talla mediana. </p> <br>
            <p><b>2. Πελάτης:</b> Perdón, ¿dónde están los probadores?  </p> <br>
            <p><b>3. Πελάτης:</b> Gracias. ¿Tienen estas camisas en otros colores?  </p> <br>
            <p><b>4. Πωλητής:</b> Claro, aquí tiene. Los probadores están disponibles (διαθέσιμα). </p> <br>
            <p><b>5. Πωλητής:</b> Sí, tenemos en azul, negro y rojo.   </p> <br>
            <p><b>6. Πωλητής:</b>Los probadores están al fondo a la derecha. </p> <br>
            `,
            options: ['3 - 2 - 5 - 1 - 4 - 6', '6 - 3 - 2 - 1 - 5 - 4', '1 - 2 - 4 - 5 - 3 - 6', '2 - 6 - 3 - 5 - 1 - 4'],
            correctAnswer: '2 - 6 - 3 - 5 - 1 - 4'
        },
        {
            chapter: 4,
            difficulty_level: 'Hard',
            text: `
            <p>Ο Παρακάτω διάλογος είναι μπερδεμένος, ποία είναι η σωστή σείρα? </p> <br><br>
            <p><b>1. Πελάτης:</b> ¿Tienen estos zapatos en talla 38? </p> <br>
            <p><b>2. Πωλητής:</b> Claro, las sandalias están en la sección de verano (καλοκαιρινό) al final del pasillo (διάδρομος).   </p> <br>
            <p><b>3. Πωλητής:</b> Voy a comprobar (ελεγξω). Un momento, por favor.   </p> <br>
            <p><b>4. Πωλητής:</b> Sí, por supuesto. Ahora vuelvo (επιστρέφω) con los zapatos. </p> <br>
            <p><b>5. Πελάτης:</b> Gracias. También (επίσης) me gustaría ver algunas (μερικά) sandalias.  </p> <br>
            <p><b>6. Πελάτης:</b>Perfecto, ¿puedo verlas?  </p> <br>
            `,
            options: ['3 - 1 - 2 - 5 - 4 - 6', '4 - 6 - 2 - 5 - 1 - 3', '5 - 1 - 3 - 6 - 2 - 4', '1 - 3 - 5 - 2 - 6 - 4'],
            correctAnswer: '1 - 3 - 5 - 2 - 6 - 4'
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
