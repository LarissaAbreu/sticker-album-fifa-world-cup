import firebase from 'firebase';
import config from './config';
import signInWithEmailAndPassword from './signInWithEmailAndPassword';
import createUserWithEmailAndPassword from './createUserWithEmailAndPassword';

const sectionLogin = document.getElementById('login');
const emailInput = document.getElementById('email');
const emailPassword = document.getElementById('password');
const signInButton = document.getElementById('signin');
const signUpButton = document.getElementById('signup');

firebase.initializeApp(config);
const auth = firebase.auth();

signInButton.addEventListener('click', () => signInWithEmailAndPassword(emailInput, emailPassword, auth));
signUpButton.addEventListener('click', () => createUserWithEmailAndPassword(emailInput, emailPassword, auth));
