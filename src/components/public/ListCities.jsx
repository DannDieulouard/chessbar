import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../public/css/listcities.css";

const ListCities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://chessbar-7ee82a4295af.herokuapp.com/api/cities", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },  
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((citiesData) => {
        setCities(citiesData.data);
      });
  }, []);

  return (
    <main>
        <div className="listcities">
            <h1>VILLES</h1>
        </div>
      <section>
        {cities.map((city) => {
          return (
            <article key={city.id}>
              <h2>{city.name}</h2>
              <Link to={`/chessbar/bars/details/${city.id}`}>
              <img src={city.imageUrl} alt="cityLogo"/>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default ListCities;