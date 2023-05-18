import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Footer = () => {
  const categoriesState = useSelector((state) => state.categoriesState);
  return (
    <div>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src="https://picsum.photos/200"
              alt=""
              width="60"
              height="45"
            />
            <small className="d-block mb-3 text-body-secondary">
              © 2017 - 2023
            </small>
          </div>
          <div className="col-6 col-md">
            <h5>Categories</h5>
            <ul className="list-unstyled text-small">
              {categoriesState.categories.map((item, index) => {
                if(index>=5) { return null};
                return (
                  <li key={index} className="mb-1">
                    <Link
                      className="link-secondary text-decoration-none"
                      to={"/categories/" + item.slug}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <Link className="link-secondary text-decoration-none" to="#">
                  Resource
                </Link>
              </li>
              <li className="mb-1">
                <Link className="link-secondary text-decoration-none" to="#">
                  Resource name
                </Link>
              </li>
              <li className="mb-1">
                <Link className="link-secondary text-decoration-none" to="#">
                  Another resource
                </Link>
              </li>
              <li className="mb-1">
                <Link className="link-secondary text-decoration-none" to="#">
                  Final resource
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <Link className="link-secondary text-decoration-none" to="#">
                  Team
                </Link>
              </li>
              <li className="mb-1">
                <Link className="link-secondary text-decoration-none" to="#">
                  Locations
                </Link>
              </li>
              <li className="mb-1">
                <Link className="link-secondary text-decoration-none" to="#">
                  Privacy
                </Link>
              </li>
              <li className="mb-1">
                <Link className="link-secondary text-decoration-none" to="#">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
