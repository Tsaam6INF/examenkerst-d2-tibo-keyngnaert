// src/App.tsx
import './App.css';
import PersoonKaart from './personenKaart';

interface Persoon {
  naam: string;
  klas: string[];
}

const App = () => {
  const films: Persoon[] = [
    { naam: "Karel Kleintjes", klas: ["1A", "2A", "3STW"] },
    { naam: "Els Dotjes", klas: ["1A", "2B", "3H"] },
  ];

  return (
    <div className="app">
      <h1>Leerlingen School</h1>
      <div className="personen-container">
        {films.map((film, index) => (
          <PersoonKaart key={index} naam={film.naam} klas={film.klas} />
        ))}
      </div>
    </div>
  );
};

export default App;

