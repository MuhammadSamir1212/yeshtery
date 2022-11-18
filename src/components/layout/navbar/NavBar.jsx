import { navLinks } from "../../../services";
import "./navbar.css";
import NavUpper from "./NavUpper";
import NavMeddel from "./NavMeddel";
import { Link } from "react-router-dom";

const NavBar = ({ cartItems, handelAddCart }) => {
  return (
    <nav>
      <NavUpper />
      <NavMeddel cartItems={cartItems} handelAddCart={handelAddCart} />
      <div className="main-nav">
        <div className="main-nav-container">
          <ul className="nav-ul">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="nav-li">
                <Link to={nav.link}>{nav.title}</Link>
              </li>
            ))}
            <Link to="/offers" className="nav-offer">
              Offers
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
