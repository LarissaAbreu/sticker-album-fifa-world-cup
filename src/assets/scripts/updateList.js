import createElement from './createElement'

const updateList = (dbRef, list) => {
  dbRef.on('child_added', snap => {
    const newSticker = snap.val();

    list.forEach((sticker) => {
      if (newSticker.number == sticker.number) {
        sticker.classList.add('list-sticker__sticker--pasted');
      }
    });
  });
  
  dbRef.on('child_changed', snap => {
    const newSticker = snap.val();

    list.forEach((sticker) => {
      if (newSticker.number == sticker.number) {

        if (newSticker.quant == 2) {
          const quant = <span className="list-sticker__sticker__quant">{newSticker.quant - 1}</span>;
          sticker.appendChild(quant);
        } else if (newSticker.quant > 2) {
          const span = sticker.querySelector('span');
          span.innerText = newSticker.quant - 1;
        } else if (newSticker.quant <= 1) {
          sticker.innerText = newSticker.number;
        }
      }
    });
  });
  
  dbRef.on('child_removed', snap => {
    const stickerRemoved = snap.val();

    list.forEach((sticker) => {
      if (stickerRemoved.number == sticker.number) {
        sticker.classList.remove('list-sticker__sticker--pasted');
      }
    });
  });
}

export default updateList;
