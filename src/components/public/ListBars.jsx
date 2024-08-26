import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../public/css/listbars.css";

const ListBars = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    fetch("https://chessbar-7ee82a4295af.herokuapp.com/api/bars", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((barsData) => {
        setBars(barsData.data);
      });
  }, []);

  return (
    <main>
      <section>
        {bars.map((bar) => {
          return (
            <article className="listBars" key={bar.id}>
              <h2>{bar.name} - {bar.city}</h2>
              <Link to={`/chessbar/bars/details/${bar.id}`}>
              <img src={bar.imageUrl} alt="barLogo"/>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default ListBars;