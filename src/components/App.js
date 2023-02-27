// create your App component here
import React, { useState, useEffect } from "react";

export default function App() { 
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogs, setDogs] = useState([]);
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((res) => res.json())
          .then((data) => {
            setIsLoaded(true);
            setDogs(data.message);
          });
  })

    if (!isLoaded) { 
        return <p>Loading...</p>
    } else  {
        return (
            <div>
                <img src={dogs} alt="A Random Dog" />
            </div>
        )
    }
}


