import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then(
        (result) => {
          setName(result.title);
        },
        (error) => {
          console.log('Erro');
        },
      );
  }, []);

  return (
    <>
      <Text>Texto: {name}</Text>
    </>
  );
}

export default App;
