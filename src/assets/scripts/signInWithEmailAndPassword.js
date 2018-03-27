const signInWithEmailAndPassword = (email, password, auth) => {
  auth.signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
      window.location.replace('table.html');
    })
    .catch((e) => {
      alert('Tá errado')
    });
}

export default signInWithEmailAndPassword;
