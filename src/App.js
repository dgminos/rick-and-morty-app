import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Pagination from "./components/Pagination";
import "./index.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const baseCharacterUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) =>
        console.log("error caught while fetching data: " + error)
      );
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(baseCharacterUrl);
  }, []);

  return (
    <>
      <Header brand="Rick and Morty App" />
      <div className="container">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Main characters={characters} />
      </div>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <Footer />
    </>
  );
};

export default App;
