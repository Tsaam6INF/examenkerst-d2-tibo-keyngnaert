// src/MovieCard.tsx

interface PersonenProps {
  naam: string;
  klas: string[];
}

const PersoonKaart = ({ naam, klas }: PersonenProps) => {
  return (
    <div className="persoon-card">
      <div className="naam-persoon">
        <h3>{naam}</h3>
      </div>
      <div className="persoon-klassen">
        {klas.map((g, index) => (
          <span key={index} className="persoon-tag">
            {g}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PersoonKaart;
