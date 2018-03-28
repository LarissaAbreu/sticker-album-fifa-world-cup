const deleteSticker = (dbRef, input) => {
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

    if (findSticker && quant == 1) {
      dbRef.child(key).remove();
      input.value = '';
    } else if (findSticker && quant > 1) {
      dbRef.child(key).update({
        quant: quant - 1
      });
      input.value = '';
    } else {
      input.error = true;
    }
  });
}

export default deleteSticker;
