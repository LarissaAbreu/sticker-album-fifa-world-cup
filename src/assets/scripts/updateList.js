const updateList = (dbRef, list) => {
  dbRef.on('child_added', snap => {
    const sticker = snap.val();
  
    const li = document.createElement('li');
    li.id = snap.key;
    li.innerText = `Number: ${sticker.number} / Quant.: ${sticker.quant}`;
  
    list.appendChild(li);
  });
  
  dbRef.on('child_changed', snap => {
    const sticker = snap.val();
  
    const stickerChanged = document.getElementById(snap.key);
  
    stickerChanged.innerText = `Number: ${sticker.number} / Quant.: ${sticker.quant}`;
  });
  
  dbRef.on('child_removed', snap => {
    const stickerRemoved = document.getElementById(snap.key);
  
    stickerRemoved.remove();
  });
}

export default updateList;
