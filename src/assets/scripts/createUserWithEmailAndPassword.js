const createUserWithEmailAndPassword = (email, password, auth) => {
  auth.createUserWithEmailAndPassword(email.value, password.value);
}

export default createUserWithEmailAndPassword;
