import './App.css';
import Header from './Componentes/Header';
import { ThemeComponent } from './Componentes/ThemeContext';
import ListaDeNotas from "./Componentes/ListaDeNotas";

function App() {
  return (
      <div className="App">
        <ThemeComponent>
            <Header /> 
            <ListaDeNotas />
        </ThemeComponent>

      </div>
  );
}

export default App;
