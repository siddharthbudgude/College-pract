import './App.css';
import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 200,
};
const product = [
  { title: 'carrot', isFruit: false, id: 1 },
  { title: 'cabbage', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


export default function Component() {

  //useState
  const [count, setCount] = useState(0);

  //Display data from the array using map
  const listItems = product.map(product =>
    <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
      {product.title}
    </li>
  );

  //function for check button clicked count and show allert
  function handleClick() {
    setCount(count + 1);
    alert('Hurray You Just Clicked the Button');
  }

  return (
    <>
      <ul>{listItems}</ul>

      <h1>Here are the details of user</h1>

      <h5>{user.name}</h5>

      <img className='avatar' src={user.imageUrl} alt={'photo of' + user.name} style={{ width: user.imageSize, height: user.imageSize }} />
      
      <button onClick={handleClick}>Click {count} times</button>
      <button onClick={handleClick}>Click {count} times</button>
    </>
  );
}

