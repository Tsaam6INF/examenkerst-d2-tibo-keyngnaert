// src/App.tsx
import './App.css';
import PersoonKaart from './personenKaart';

interface Persoon { // interface => blueprint van iets, zegt tegen programmeur : " maak een object van dit type"
  naam: string;     // in dit geval dus van een string bijvoorbeeld
  klas: string[];
}

const App = () => {
  const films: Persoon[] = [ // verwijzing naar de interface Persoon, om die variabelen te kunnen gebruiken
    { naam: "Karel Kleintjes", klas: ["1A", "2A", "3STW"] },
    { naam: "Els Dotjes", klas: ["1A", "2B", "3H"] },
  ];

  return (
    <div className="app">
      <h1>Leerlingen School</h1>
      <div className="personen-container">
        {films.map((film, index) => (  //map => voor elke persoon moeten deze elementen apart worden weergegeven
          <PersoonKaart key={index} naam={film.naam} klas={film.klas} /> // in dit geval hun naam en klas, de key geeft een index aan elke persoon
        ))}
      </div>
    </div>
  );
};

export default App; // module exporteren om hem in je main.tsx te kunnen plaatsen

