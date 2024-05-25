import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import BookCard from './features/books/BookCard';

function App() {
  return (
    <>
        <Header />
        <BookCard />
    </> 
       
     
  );
}

export default App;
