import { useState, useEffect } from 'react';

const Bio = ({ delay }) => {
  const [bioText, setBioText] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://picsum.photos/v2/list')
        .then((response) => response.json())
        .then(() => setBioText('I like long walks on the beach and JavaScript'))
        .catch((error) => console.error(error));
    }, delay);
  }, [delay]);

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
