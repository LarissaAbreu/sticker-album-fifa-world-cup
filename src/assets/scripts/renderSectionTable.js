import createElement from './createElement';
import updateList from './updateList';

const renderSectionTable = (sectionTable, sectionLogin, firebase, user) => {
  sectionTable.classList.remove('hide');
  sectionLogin.classList.add('hide');

  const dbRef = firebase.database().ref(user.uid);
  const auth = firebase.auth();

  const addStickerInput = (
    <input type="number" />
  );
  sectionTable.appendChild(addStickerInput);

  const addStickerButton = (
    <button onClick={() => insertSticker(dbRef, addStickerInput)}>Add</button>
  );
  sectionTable.appendChild(addStickerButton);

  const stickersList = (<ul></ul>);
  sectionTable.appendChild(stickersList);

  updateList(dbRef, stickersList);
  
  const logOutButton = (
    <button onCLick={() => auth.signOut()}>LogOut</button>
  );
  sectionTable.appendChild(logOutButton);
}

export default renderSectionTable;
