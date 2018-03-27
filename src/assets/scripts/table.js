import firebase from 'firebase';
import config from './config';
import insertSticker from './insertSticker';
import updateList from './updateList';
import createList from './createList';

const sectionTable = document.getElementById('table');
const inputAddSticker = document.getElementById('inputAddSticker');
const buttonAddSticker = document.getElementById('buttonAddSticker');
const listSticker = document.getElementById('listSticker');
const buttonLogOut = document.getElementById('logout');
const userEmail = document.getElementById('user');
const totalStickers = document.getElementById('totalStickers');
const repeatStickers = document.getElementById('repeatStickers');

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
    
    buttonAddSticker.addEventListener('click', () => insertSticker(dbRef, inputAddSticker));
    buttonLogOut.addEventListener('click', () => auth.signOut());
  } else {
    window.location.replace('index.html');
  }
});
