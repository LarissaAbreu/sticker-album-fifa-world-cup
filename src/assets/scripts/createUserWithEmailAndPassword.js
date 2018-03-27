const createUserWithEmailAndPassword = (email, password, auth) => {
  auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
      window.location.replace('table.html');
    });
}

export default createUserWithEmailAndPassword;
