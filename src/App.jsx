import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [catImageUrl, setCatImageUrl] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const dogResponse = await fetch('https://dog.ceo/api/breeds/image/random');
      const dogData = await dogResponse.json();
      setDogImageUrl(dogData.message);


      const catResponse = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
      const catData = await catResponse.json();
      setCatImageUrl(catData[0].url);
    };

    fetchImages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="dog-container">
        <p className="text">Me</p>
          <img src={dogImageUrl} alt="Random Dog" className="pet-image" />
          
        </div>
        <div className="cat-container">
        <p className="text">You</p>
          <img src={catImageUrl} alt="Random Cat" className="pet-image" />
        </div>
        <button onClick={() => window.location.reload()}>Refresh for New Pets</button>
      </header>
    </div>
  );
}

export default App;