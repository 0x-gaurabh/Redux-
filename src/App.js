import React from 'react';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import './App.scss';
import Home from './components/Home/Home';

import MovieDetail from './components/movieDeatail/MovieDetail';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Header from './components/header/Header';
import Footer from'./components/footer/Footer'



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
        <div className="container">

         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route  element={<PageNotFound />} />
         </Routes>
        </div>
         <Footer />

     </BrowserRouter>
    </div>
  );
}

export default App;
