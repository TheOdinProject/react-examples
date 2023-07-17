import { useState, useEffect } from 'react';

const Bio = ({ delay }) => {
  const [bioText, setBioText] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
        .then((response) => response.json())
        .then((response) =>
          setBioText('I like long walks on the beach and JavaScript'),
        )
        .catch((error) => console.error(error));
    }, delay);
  }, []);

  return (
    bioText && (
      <>
        <p>{bioText}</p>
      </>
    )
  );
};

/*
const Bio = ({ bioText }) => {
  return (
    bioText && (
      <>
        <p>{bioText}</p>
      </>
    )
  );
};
*/

export default Bio;
