import { useEffect, useState } from "react";
import Characters from "./Components/Characters/Characters.jsx";
import CharCard from "./Components/CharCard/CharCard.jsx";

export default function App() {
  const axios = require("axios").default;

  const BASE = "https://rickandmortyapi.com/api/character/?page=";

  const [numberPage, setNumberPage] = useState(1);

  const [listCharacters, setList] = useState();

  async function ChangePage(button) {
    if (numberPage === 1 && button === "mais") {
      setNumberPage(numberPage + 1);
    } else if (numberPage > 1 && numberPage < 42) {
      button === "mais"
        ? setNumberPage(numberPage + 1)
        : setNumberPage(numberPage - 1);
    } else if (numberPage === 42 && button === "menos") {
      setNumberPage(numberPage - 1);
    }
    axios
      .get(BASE + numberPage)
      .then((response) => setList(response.data.results));
  }

  useEffect(() => {
    console.log(numberPage);
  }, [numberPage]);

  useEffect(() => {
    axios
      .get(BASE + numberPage)
      .then((response) => setList(response.data.results));
  });

  return (
    <div className="masterBox">
      <Characters numberPage={numberPage} ChangePage={ChangePage} />
      <CharCard data={listCharacters} />
    </div>
  );
}
