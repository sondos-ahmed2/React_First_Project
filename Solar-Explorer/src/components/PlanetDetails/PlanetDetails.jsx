import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./PlanetDetails.css";
export default function PlanetDetails() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlanet = async () => {
      try {
        const response = await axios.get(
          "https://solar-system-opendata-proxy.vercel.app/api/planets",
        );
        const data = response.data.bodies.find((planet) => planet.id === id);
        setPlanet(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getPlanet();
  }, [id]);
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-warning mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (!planet) {
    return <div>Planet not found</div>;
  }
  return (
    <div className="row g-4 ">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="text-center">
          <img src={planet.image} alt={planet.englishName} className="pt-4" />
        </div>
      </div>
      <div className="col-12 col-md-6 mt-5">
        <h2 className="mb-4 text-white text-center">{planet.englishName}</h2>
        <div className="row g-3">
          <div className="col-6">
            <div className="border rounded p-3 h-100 bg-secondary-subtle">
              <h5>Gravity</h5>
              <p className="para-details">{planet.gravity} m/s²</p>
            </div>
          </div>
          <div className="col-6">
            <div className="border rounded p-3 h-100 bg-secondary-subtle">
              <h5>Mean Radius</h5>
              <p className="para-details">{planet.meanRadius} km</p>
            </div>
          </div>
          <div className="col-6">
            <div className="border rounded p-3 h-100 bg-secondary-subtle">
              <h5>Moons</h5>
              <p className="para-details">
                {planet.moons ? planet.moons.length : 0}
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="border rounded p-3 h-100 bg-secondary-subtle">
              <h5>Escape Velocity</h5>
              <p className="para-details">{planet.escape} km/s</p>
            </div>
          </div>
        </div>
        <Link
          to="/Planets"
          className="btn btn-hover bg-warning bg-opacity-75 text-white mt-4 col-12"
        >
          Back to Planets
        </Link>
      </div>
    </div>
  );
}
