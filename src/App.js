
import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import IssueListComponent from './components/IssueListComponent';
import FooterComponent from './FooterComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AboutUsComponent from './components/AboutUsComponent';

function App() {
  return (
    <Router>
    <HeaderComponent />
   <Routes> 
   <Route exact path='/explore' element={<IssueListComponent />} />
   <Route exact path='/aboutUs' element={<AboutUsComponent />} />
   </Routes>
   <FooterComponent />
 </Router>
  );
}

export default App;
