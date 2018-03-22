import firebase from 'firebase';
import config from './config';
import insertSticker from './insertSticker';
import updateList from './updateList';

firebase.initializeApp(config);
const dbRef = firebase.database().ref().child('stickers');
const auth = firebase.auth();

const addStickerButton = document.getElementById('addSticker');
const addStickerInput = document.getElementById('sticker');
const stickersList = document.getElementById('stickers');
const emailInput = document.getElementById('email');
const emailPassword = document.getElementById('password');
const signInButton = document.getElementById('signin');
const signUpButton = document.getElementById('signup');
const logOutButton = document.getElementById('logout');
const tableListStickers = document.getElementById('table');
const sectionLogin = document.getElementById('login');

signInButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = emailPassword.value;

  const signIn = auth.signInWithEmailAndPassword(email, password);

  signIn.catch(e => alert('Tá errado'));
});

signUpButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = emailPassword.value;

  auth.createUserWithEmailAndPassword(email, password);
});

logOutButton.addEventListener('click', () => {
  auth.signOut();
});

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('logado!');
    tableListStickers.classList.remove('hide');
    sectionLogin.classList.add('hide');
  } else {
    console.log('deslogado');
    tableListStickers.classList.add('hide');
    sectionLogin.classList.remove('hide');
  }
});

addStickerButton.addEventListener('click', () => insertSticker(dbRef, addStickerInput));

updateList(dbRef, stickersList);
