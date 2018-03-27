import createElement from './createElement';

const createList = (ul) => {
  for (let i = 0; i < 682; i++) {
    const li = <li className="list-sticker__sticker" number={String(i)}>{String(i)}</li>;
    ul.appendChild(li);
  };
}

export default createList;
