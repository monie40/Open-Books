import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Searchbox from "./components/Searchbox";
import PageControl from "./components/PageControl";

function App() {
  const [data, setData] = useState(null);
  const [lastSearch, setLastSearch] = useState(null);
  return (
    <>
      <Header />
      <Searchbox setData={setData} setLastSearch={setLastSearch} />
      <Results books={data}></Results>
      <PageControl
        books={data}
        setData={setData}
        lastSearch={lastSearch}
      ></PageControl>
    </>
  );
}

export default App;
