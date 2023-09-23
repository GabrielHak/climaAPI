import TempActual from './Components/TempActual';
import Hoy from './Components/Hoy';
import MaxMin from './Components/MaxMin';
import Extras from './Components/Extras';

import './App.css';

function App() {
  return (
    <div className="clima">
      <TempActual></TempActual>
      <Hoy></Hoy>
      <MaxMin></MaxMin>
      <Extras></Extras>
    </div>
  );
}

export default App;
