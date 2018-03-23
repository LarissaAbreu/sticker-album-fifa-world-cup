const signInWithEmailAndPassword = (email, password, auth) => {
  auth.signInWithEmailAndPassword(email.value, password.value).catch((e) => {
    alert('Tá errado')
  });
}

export default signInWithEmailAndPassword;
