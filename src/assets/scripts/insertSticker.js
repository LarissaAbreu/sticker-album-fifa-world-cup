import newSticker from './newSticker';
import updateSticker from './updateSticker';

const insertSticker = (dbRef, input) => {

  const value = input.value;

  if (value < 0 || value >= 682) {
    input.error = true;
    return;
  } else {
    input.error = false;
  }
  
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
