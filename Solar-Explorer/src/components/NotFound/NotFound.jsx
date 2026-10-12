import { Link } from "react-router-dom";
import './NotFound.css'
export default function NotFound() {
  return (
    <>
      <div className=" col-12 col-md-10 col-lg-6 card card-body bg-secondary-subtle mx-auto text-center pt-5 ps-5 pe-5 mt-5 notfound-content">
        <h3 className="text-danger">Error 404 : Not Found This Page</h3>
        <Link
          to="/"
          className="btn btn-hover col-6 bg-warning bg-opacity-75 text-white btn-lg mt-4 mx-auto mb-3"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
