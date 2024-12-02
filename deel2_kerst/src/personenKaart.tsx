// src/MovieCard.tsx

interface PersonenProps { 
  naam: string;
  klas: string[];
}

const PersoonKaart = ({ naam, klas }: PersonenProps) => { // het is tsx, dus definiëren dat dit van je interface hierboven komt
  return ( 
    <div className="persoon-card">
      <div className="naam-persoon">
        <h3>{naam}</h3>     
      </div>
      <div className="persoon-klassen">
        {klas.map((klasnaam, index) => ( // voor ieder element apart een index geven, onderaan worden dan de klassen weergegeven 
          <span key={index} className="klas-tag"> 
            {klasnaam} 
          </span>
        ))}
      </div>
    </div>
  );
};

export default PersoonKaart;
