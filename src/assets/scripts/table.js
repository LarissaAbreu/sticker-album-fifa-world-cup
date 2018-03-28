import firebase from 'firebase';
import config from './config';
import insertSticker from './insertSticker';
import updateList from './updateList';
import createList from './createList';
import deleteSticker from './deleteSticker';

const sectionTable = document.getElementById('table');
const inputAddSticker = document.getElementById('inputAddSticker');
const buttonAddSticker = document.getElementById('buttonAddSticker');
const listSticker = document.getElementById('listSticker');
const buttonLogOut = document.getElementById('logout');
const userEmail = document.getElementById('user');
const totalStickers = document.getElementById('totalStickers');
const repeatStickers = document.getElementById('repeatStickers');
const inputRemoveSticker = document.getElementById('inputRemoveSticker');
const buttonRemoveSticker = document.getElementById('buttonRemoveSticker');

createList(listSticker);

const allStickersList = document.querySelectorAll('.list-sticker__sticker');

firebase.initializeApp(config);
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if (user) {
    const dbRef = firebase.database().ref(user.uid);

    updateList(dbRef, allStickersList);

    userEmail.innerText = user.email;

    dbRef.on('value', snap => {
      const sticker = snap.val();

      if (sticker) {
        const arrKeys = Object.keys(sticker);
        totalStickers.innerText = arrKeys.length;

        const arrValues = Object.values(sticker);

        let totalRepeat = 0;

        arrValues.forEach(sticker => {
          if (sticker.quant > 1) {
            totalRepeat += (sticker.quant - 1);
          }
        });

        if (totalRepeat > 0) {
          repeatStickers.innerText = totalRepeat;
        } else {
          repeatStickers.innerText = 0;
        }

      } else {
        totalStickers.innerText = 0;
        repeatStickers.innerText = 0;
      }

    });

    const removeError = (input) => {
      const valueInput = input.value;

      if (valueInput == '') {
        input.error = false;
      }
    };

    inputRemoveSticker.addEventListener('keydown', (e) => {

      const pressEnter = e.which === 13 || e.keyCode === 13;

      if (pressEnter) {
        e.preventDefault();
        deleteSticker(dbRef, inputRemoveSticker);
      }
    });

    inputRemoveSticker.addEventListener('blur', () => removeError(inputRemoveSticker));

    buttonRemoveSticker.addEventListener('click', () => deleteSticker(dbRef, inputRemoveSticker));
    
    inputAddSticker.addEventListener('keydown', (e) => {

      const pressEnter = e.which === 13 || e.keyCode === 13;

      if (pressEnter) {
        e.preventDefault();
        insertSticker(dbRef, inputAddSticker);
      }
    });

    inputAddSticker.addEventListener('blur', () => removeError(inputAddSticker));

    buttonAddSticker.addEventListener('click', () => insertSticker(dbRef, inputAddSticker));
    buttonLogOut.addEventListener('click', () => auth.signOut());
  } else {
    window.location.replace('index.html');
  }
});
