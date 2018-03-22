const newSticker = (dbRef, number) => {
  dbRef.push().set({
    number: Number(number),
    quant: 1
  });
}

export default newSticker;
