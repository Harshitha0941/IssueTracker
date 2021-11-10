
import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import IssueListComponent from './components/IssueListComponent';

function App() {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <IssueListComponent/>
    </React.Fragment>
  );
}

export default App;
