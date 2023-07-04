// import logo from './logo.svg';
import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import SelectedPost from "./SelectedPost";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/item/:id" element={<SelectedPost/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
