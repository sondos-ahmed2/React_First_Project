import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home text-center text-white py-5">
        <h1 className="display-3 fw-bold">Explore the Solar System</h1>
        <p className="mt-3">
          Discover the planets, explore their secrets and learn more about our
          amazing universe.
        </p>
        <Link
          to="/Planets"
          className="btn btn-hover bg-warning bg-opacity-75 text-white btn-lg mt-3"
        >
          Explore Planets →
        </Link>
      </div>
    </>
  );
}
