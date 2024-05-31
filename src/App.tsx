import React from 'react';
import logo from './logo.svg';
import './App.css';
import UploadImages from './components/UploadImage';
import VideoPresentation from './components/VideoPresentation';
import Accordion from './components/Accordion';
import './App.css';


function App() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value:any) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-white">
          Mon portefolio
        </h1>
      </header>
      <div>
      <Accordion title="Je me présente avec mon avatar IA" isOn={true}><VideoPresentation/></Accordion>
      <Accordion title="Télécharger mes Images" isOn={false}><UploadImages/></Accordion>
      </div>
    </div>
  );
}

export default App;
