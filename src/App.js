import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import BookCard from './features/books/BookCard';
import Searchbox from './components/Searchbox';

function App() {

  //const [data, setData] = useState(null);
/*
  useEffect(() => {
    fetch('https://openlibrary.org/search.json?title=the+lord+the+rings&limit=2')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  console.log(data);
  const books = JSON.stringify(data);

  */
  //console.log(books);
  
  //Try using conditional rendering
  return (
    <>
        <Header />
        <Searchbox />
       
       
         
    </> 
  );
}

export default App;
