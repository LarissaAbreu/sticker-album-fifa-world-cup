import newSticker from './newSticker';
import updateSticker from './updateSticker';

const insertSticker = (dbRef, input) => {
  dbRef.once('value', snap => {

    let key;
    let quant;

    const findSticker = snap.forEach(childSnap => {

      const currentStickerNumber = childSnap.val().number;
      const newStickerNumber = Number(input.value);

      if (currentStickerNumber === newStickerNumber) {
        key = childSnap.key;
        quant = childSnap.val().quant;
        return true;
      }

    });

    findSticker
      ? updateSticker(dbRef, key, quant)
      : newSticker(dbRef, input.value);
  });

  input.value = '';
}

export default insertSticker;
