import { useState, useEffect } from "react";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImageUrl(data.message);
    };

    fetchDogImage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {dogImageUrl && <img src={dogImageUrl} alt="Random Dog" />}
        <br />
        <button onClick={() => window.location.reload()}>Refresh for New Dog</button>
      </header>
    </div>
  );
}

export default App;