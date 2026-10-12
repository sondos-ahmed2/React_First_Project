import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./planets.css";
export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await axios.get(
          "https://solar-system-opendata-proxy.vercel.app/api/planets",
        );
        // console.log(response);
        setPlanets(response.data.bodies.filter((planet) => planet.isPlanet));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getPlanets();
  }, []);
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-warning mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (!planets) {
    return <div>Error</div>;
  }
  return (
    <div className="container-fluid ">
      <h1 className="text-center text-white">Explore the Solar System</h1>
      <p className="text-center text-white">
        Click on any planet to discover its secrets
      </p>
      <div className="row">
        {planets.map((planet) => (
          <div className="col-12 col-md-6 col-lg-3 mb-3" key={planet.id}>
            <div className="card planet-card h-100 bg-opacity-25 bg-secondary-subtle">
              <img
                src={planet.image}
                className=" w-75 mx-auto"
                alt={planet.englishName}
              />
              <div className="card-body">
                <h3 className="text-center">{planet.englishName}</h3>
                <p className="card-text text-center p-1">
                  {planet.description}
                </p>
              </div>
              <Link
                to={`/planets/${planet.id}`}
                className=" btn btn-secondary text-white"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
