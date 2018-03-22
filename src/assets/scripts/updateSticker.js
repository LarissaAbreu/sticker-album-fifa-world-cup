const updateSticker = (dbRef, key, quant) => {
  dbRef.child(key).update({
    quant: quant + 1        
  });
}

export default updateSticker;
