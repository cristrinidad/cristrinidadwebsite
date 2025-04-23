import { Link } from "react-scroll";

function NavBar() {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item mx-3 h5">
          <Link
            className="nav-link text-white"
            to="home"
            smooth={true}
            duration={0}
            tabIndex={1}
          >
            Home
          </Link>
        </li>
        <li className="nav-item mx-3 h5">
          <Link
            className="nav-link text-white"
            to="skills"
            smooth={true}
            duration={0}
            tabIndex={2}
          >
            Skills
          </Link>
        </li>
        <li className="nav-item mx-3 h5">
          <Link
            className="nav-link text-white"
            to="latest-works"
            smooth={true}
            duration={0}
            tabIndex={2}
          >
            Latest Works
          </Link>
        </li>
        <li className="nav-item mx-3 h5">
          <Link
            className="nav-link text-white"
            to="work-experience"
            smooth={true}
            duration={0}
            tabIndex={3}
          >
            Work Experience
          </Link>
        </li>
        <li className="nav-item mx-3 h5">
          <Link
            className="nav-link text-white"
            to="contact"
            smooth={true}
            duration={0}
            tabIndex={4}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
