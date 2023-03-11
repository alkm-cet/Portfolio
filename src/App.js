import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from 'react';
import ProjectsContextProvider from './context/ProjectsContext';
//PAGES
import LeftNavBar from './components/LeftNavBar/LeftNavBar';
import RightSideMain from './components/RightSide/RightSideMain';

function App() {
  return (
    <Router>
      <ProjectsContextProvider>
        <div className="App">
          <LeftNavBar />
          <RightSideMain />
        </div>
      </ProjectsContextProvider>
    </Router>
  );
}

export default App;
