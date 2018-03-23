import firebase from 'firebase';
import config from './config';
import insertSticker from './insertSticker';
import signInWithEmailAndPassword from './signInWithEmailAndPassword';
import createUserWithEmailAndPassword from './createUserWithEmailAndPassword';
import renderSectionTable from './renderSectionTable';

// View login
const sectionLogin = document.getElementById('login');
const emailInput = document.getElementById('email');
const emailPassword = document.getElementById('password');
const signInButton = document.getElementById('signin');
const signUpButton = document.getElementById('signup');

// View table
const sectionTable = document.getElementById('table');

firebase.initializeApp(config);
const auth = firebase.auth();

signInButton.addEventListener('click', () => signInWithEmailAndPassword(emailInput, emailPassword, auth));
signUpButton.addEventListener('click', () => createUserWithEmailAndPassword(emailInput, emailPassword, auth));

auth.onAuthStateChanged(user => {
  if (user) {
    renderSectionTable(sectionTable, sectionLogin, firebase, user);
  } else {
    sectionTable.classList.add('hide');
    sectionLogin.classList.remove('hide');
    sectionTable.innerHTML = '';
  }
});
