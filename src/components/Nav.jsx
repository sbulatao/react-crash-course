import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users/ronald">Ronald</Link>
          <Link to="/users/messi">Messi</Link>
          <Link to="/users/sbulatao">Sarah Reine Bulatao</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Nav;