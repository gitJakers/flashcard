import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1tToFtbPpKt-3Ugk0icaaifdXaH5gtgc",
    authDomain: "flashcards-2cd9a.firebaseapp.com",
    projectId: "flashcards-2cd9a",
    storageBucket: "flashcards-2cd9a.appspot.com",
    messagingSenderId: "638507878070",
    appId: "1:638507878070:web:869c3a1077e453a25fc817"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore();

async function AddFlashCard(card) {
    try {
        const docRef = await addDoc(collection(db, "flashcards"), {
            Category: card.Category,
            Definition: card.Definition,
            Term: card.Term
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//Arrays for card categories
const cards = [];
const jsCards = [];
const reactCards = [];
const csharpCards= [];
const miscCards = [];

//Call this when the app loads so the data can already be loaded.
async function getFlashCards() {
    cards.length = 0;
    const querySnapshot = await getDocs(collection(db, "flashcards"));
    querySnapshot.forEach((doc) => {
        if(doc.data().Category == "Javascript"){
            jsCards.push(doc.data());
        }else if(doc.data().Category == "React"){
            reactCards.push(doc.data());
        }else if(doc.data().Category == "C#"){
            csharpCards.push(doc.data());
        }else{
            miscCards.push(doc.data());
        }
        cards.push(doc.data());
    });
}

//Call this function when you need to display the data.
function getData() {
    return cards;
}

function logIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export { firebase, db, AddFlashCard, getFlashCards, getData, logIn }