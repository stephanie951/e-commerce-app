import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crownlogo } from "../../component/asset/crown.svg";
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="Nav-link">
        <Link className="logo-container" to="/">
          <Crownlogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link"  to="/shop">
            Shop
          </Link>
          <Link className="nav-link"  to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
