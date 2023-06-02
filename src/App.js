import './App.css';
import CardExhibition from './pages/CardExhibition';
import CardDev from './pages/CardDev';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={  <CardExhibition />}/>
      <Route exact path="/dev" element={  <CardDev />}/>
    </Routes>
  );
}

export default App;
